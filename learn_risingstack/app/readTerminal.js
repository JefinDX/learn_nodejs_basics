const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Enter first name ? ', (fname) => {
    rl.question('Enter last name ? ', (lname) => {
        console.log(`FULL NAME IS -- ${fname + ' ' +lname}`);
        rl.close();
    });
});
