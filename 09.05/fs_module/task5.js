    const fs = require ('fs')
    const path = require('path')


    const filepath = path.join(__dirname,"file.txt");

    console.time('Async')
    fs.readFile(filepath,(err,data)=> {
        if(err)
        {
            console.error(err.message);
        }
        else {
            console.timeEnd('Async');
        }
    });
    // console.timeEnd('Async')

    console.time('Syncronous')
    fs.readFileSync(filepath);
    console.timeEnd('Syncronous')