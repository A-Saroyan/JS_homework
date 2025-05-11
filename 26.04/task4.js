function Animal (type,name)
{
    this.type = type;
    this.name = name;
    this.describe = function  () { return `This is a ${this.type} named ${this.name}.`;}
}

let x = new Animal("bird","Eagle");
let y = new Animal("predator","Lion");

console.log(x.describe());
console.log(y.describe());



