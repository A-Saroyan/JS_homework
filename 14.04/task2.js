
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function older (age)
{
    age = Number(age);

    if(age < 18)
    {
        console.log("You are a minor ");
    }

    else 
    {
        if(age >= 65)
        {
            console.log("You are a senior citizen ");
        }        

        else 
        {
            console.log("You are an adult");
        }
    } 

}

let age;
let x = 5;




rl.question("Enter your age:",ans => {
    age = ans;
    older(age);

    rl.close();
} );
