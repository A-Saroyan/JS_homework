const fs = require('fs')
const path = require ('path')

const dirpath = path.join(__dirname,'test-dir');
const filepath = path.join(dirpath,'test.txt');


if(!fs.existsSync(dirpath))
{
    fs.mkdirSync(dirpath);
}

fs.writeFileSync(filepath,"Created new file",'utf8');
let ls = fs.readdirSync(dirpath);
console.log(ls);

fs.unlinkSync(filepath);
fs.rmdirSync(dirpath);