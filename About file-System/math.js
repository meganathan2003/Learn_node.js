const { Module } = require("module");

/**
 * In this below the code we 
 * pass the two arugment it's number now we want
 * to export the module and import the another file.
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    return a + b;
}

module.exports = {add}; // We can acheive using the module function