import myMain, { sum, y as dy } from "./a.js";
import * as AllA from "./a.js";

console.log(AllA);
let j = 20;
let y = 32;
const o = sum(y, j);
const h2 = document.createElement("h2");
h2.innerHTML = o;

document.body.append(h2);

myMain();

console.log(dy);
