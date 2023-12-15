/**
 * Below the code we use createReadstream that means
 * in production we have larger data files like 4lacs
 * line code are something like that we want to move or 
 * copy the code to another file that purpose we can use 
 * stream this is very efficent
 * 
 * @import(fs)
 * @import(path)
 */

const fs  = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,"files",'bigfile.txt'),{encoding:'utf-8'});
const ws = fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt'));

rs.pipe(ws); // This line refers to the copy to bignew file