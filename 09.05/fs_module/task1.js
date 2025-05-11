const fs = require('fs');
const path  = require('path')


const filepath = path.join(__dirname,'file.txt');

if(!fs.existsSync(filepath))
{
    fs.writeFileSync(filepath,"New file created !!!",'utf8');
}

const data = fs.readFileSync(filepath,'utf8')
console.log(data);
fs.appendFileSync(filepath,"This is a new line",'utf8');