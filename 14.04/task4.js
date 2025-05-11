const prompt = require("prompt-sync")({ sigint: true });
let secret = Math.floor(Math.random() * 10) + 1;

let num;
while (true)
{
    num = prompt(" Which number is secret: ");
    if(num < secret)
    {
        console.log("Too low!");
    }

    else if (num > secret)
    {
        console.log("Too high!");
    }

    else if (num == secret)
    {
        console.log("Congratulations! You guessed the number!");
        break;
    }

}    