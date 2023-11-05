import lodash from 'lodash'
import {plus, mult} from './math.js'

// console.log(plus(1,2));
// console.log(mult(1,2));

let arr = lodash.times(6, plus(1,2));
console.log(arr); // I dont get why I receive undefine here



