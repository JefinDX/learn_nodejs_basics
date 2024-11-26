const _ = require('lodash')
let a = {}
_.assign(a, { 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 }
console.log(a);
