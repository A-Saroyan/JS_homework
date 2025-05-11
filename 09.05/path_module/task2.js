const path = require('path')

let ad = path.parse(__filename);


console.log("Dir => ",ad.dir);
console.log("Filename =>  ",ad.base);
console.log("Extension => ",ad.ext);
