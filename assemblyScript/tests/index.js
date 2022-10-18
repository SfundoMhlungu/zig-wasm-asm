import assert from "assert";
// import { add } from "../build/debug.js";
import {addZig, factorialZig, memory} from "../build/debugzig.js"

assert.strictEqual(addZig(1, 2), 3);
console.log("add:ok")
assert.strictEqual(factorialZig(3), 6);
console.log("fact: ok");
