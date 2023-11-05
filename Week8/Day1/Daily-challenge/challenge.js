import { greet } from "./greeting.js";
import {color} from "./colorful-message.js"
import {readF} from "./files/read-file.js"

console.log(greet('Mark'))
color(greet('Mark'))

readF()