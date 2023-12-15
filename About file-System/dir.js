/**
 * Below the code for same as FS
 * here we can we create the file using
 * mkdir and remove
 * @import(fs)
 * @import(log) - for loging the data
 */

const { log } = require("console");
const fs = require("fs");

// Here we can do some logics

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) {
      throw err;
    }
    console.log("Directory Created");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) {
      throw err;
    }
    console.log("Directory Created");
  });
}
