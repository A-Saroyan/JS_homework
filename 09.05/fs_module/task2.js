const fs = require ('fs')
const path = require('path')


const filepath =  process.argv[2];
if(!fs.existsSync(filepath))
{
    console.log("Not found file !!!");
    process.exit(1);
}

fs.stat(filepath,(err,stats)=> {

    if(err) 
    {
        console.log("Errorr !!!");
    }
    else 
    {
        console.log(`Size => ${stats.size}`);
        console.log(`Creation Date => ${stats.birthtime}`)
        console.log(`Last Modified => ${stats.mtime}`);
    }
});