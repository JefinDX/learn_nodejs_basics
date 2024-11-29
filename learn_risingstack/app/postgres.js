const pg = require('pg');
const express = require('express');

const app = express();

const config = {
    user: 'postgres',
    database: 'node_hero',
    password: 'qwerty123',
    port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

//Starting from express v4.16 there is no need to require any additional modules
//just use the built-in JSON middleware
//body-parser, on which this depends, is already included with express.
app.use(express.json())

app.get('/', (req, res, next) => {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
            //done callback signals the pg driver that the connection can be closed or returned to the connection pool
            done()
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows[0]);
        })
    })
});

app.get('/users', function (req, res, next) {
    pool.connect(function (err, client, done) {
        if (err) {
            // pass the error to the express error handler
            return next(err)
        }
        client.query('SELECT name, age FROM users;', [], function (err, result) {
            done()
            if (err) {
                // pass the error to the express error handler
                return next(err)
            }
            res.json(result.rows)
        })
    })
})

app.post('/users', function (req, res, next) {
    const user = req.body
    pool.connect(function (err, client, done) {
        if (err) {
            // pass the error to the express error handler
            return next(err)
        }
        client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user?.name, user?.age], function (err, result) {
            done()
            if (err) {
                // pass the error to the express error handler
                return next(err)
            }
            res.sendStatus(200)
        })
    })
})

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
