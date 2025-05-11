var a = 1;
let b = 2;
const c = 3;

console.log("Before function:");
console.log("a:", a);  // 1
console.log("b:", b);  // 2
console.log("c:", c);  // 3

function test() {
    var a = 10;  // var-y   function-scoped
    let b = 20;  // let u const block scoped en
    const c = 30; // 
    
    console.log("Inside function:");
    console.log("a:", a);  // 10
    console.log("b:", b);  // 20
    console.log("c:", c);  // 30
}

test();

console.log("After function:");
console.log("a:", a);  // 1  
console.log("b:", b);  // 2  
console.log("c:", c);  // 3 


    