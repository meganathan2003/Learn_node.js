/**
 * @import(os)
 * @import(path)
 *  Below the code for the node Module - That means something js dev
 * Already written the code and we use it by import or using require
 * function.
 *
 */
const { log } = require("console");
// const os = require('os'); // This is called as module
import os from "os";
const path = require("path");
const math = require("./math");

console.log(os.homedir()); // These are the method return information from my OS.
console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.hostname());
console.log(os.userInfo());

log(__dirname);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename)); // this will return the extention of your file

// Below code we can use the math.js here
log(math.add(2, 5)); // output is 5

