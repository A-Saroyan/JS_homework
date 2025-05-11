
//const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// for(let i = 1; i <= 20; ++i)
// {
//     console.log(i);
// }

// let num = 0;
// while(num <= 20)
// {
//     console.log(num);
//     num += 2;
// }


function askQuestion(query){
    return new Promise ((resolve) => {
        rl.question(query,(answer) => resolve (Number (answer)));
    })     
}


let a;

(async function main()
{

    let number;
do 
{
    number = await askQuestion(" Enter the number: ");

     
} while(number != 0);

console.log("End");
rl.close();

}) ();

