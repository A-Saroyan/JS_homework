const fs = require ('fs')
const path = require('path')


let filepath = path.join(__dirname,"permissions.txt");

fs.writeFileSync(filepath,"Permissions",'utf8');

fs.chmodSync(filepath,0o400);

try{

    fs.appendFileSync(filepath,"Append",'utf8');
}

catch(err){

    console.error("You have no permission for this !!!");
    console.error(err.message);
}