const Person = (name) => { this.name = name; };

let obj =  new Person("Dev:");
console.log(let);


// TypeError: Person is not a constructor
// Qani vor this chuni,lexical scope-inna vercnum vory undefined e "scrict mode"-i jamanak, chi hxvum nor stexcvac objecti -i this-i vra
// this-i binding texi chi unenum arrow function-i jamanak 