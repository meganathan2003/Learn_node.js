// import { log } from "node:console";
// import { read, readFile,readdir } from "node:fs";
const path = require("node:path");
const fs = require("node:fs/promises");
const { log } = require("node:util");

fs.readdir("./files", (err, data) => {
  // this code read the dir
  if (err) {
    throw err;
  }
  console.log(data);
});

/**
 * But it want to read the file how to do it
 * you can use readfile moudle example are below
 * And FS working on the Async
 * @argument(err)
 * @argument(data)
 */
fs.readFile("./files/sample.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  // log(data);
  console.log(data);
});

// In node they are inbuild  provide the error handling
// code like proccs.on method

process.on("uncaughtException", (err) => {
  console.error("err:" + err);
  process.exit(1);
});

console.log("Below the code Path Method");

// Below the code we use the node inbuild moudle
// PATH - it helps to join the path we dont hard code it

// fs.readFile(path.join(__dirname, "files", "sample.txt"), (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

/**
 * Using FS module we can read wirte and read the
 * dir folder
 * @argument(err)
 * @argument(data) -- call back function
 */

/**
 *
 * most of the dev using the callback hell that means
 * inside the one function we have multiple function like
 * nested function ,so ES give the new keyword called async and
 * await that means the function runs the async and it have an
 * code readability.
 *
 */

const fileOps = async () => {
  try {
    const data = await fs.readFile("./files/sample.txt", "utf-8"); // this function is read the file
    console.log(data);

    // This function is create the new file and wrie it pass two arugments
    await fs.writeFile(path.join(__dirname, "files", "new.txt"),"This is the sample fs file the demo for writefile method"
    );
    console.log("Write Complete");

    await fs.unlink(path.join(__dirname,'files','new.txt'));
    console.log("Delete is Complete");
  } catch (err) {
    console.log(err);
  }
};
fileOps();
