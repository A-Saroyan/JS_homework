
 console.log(add_v(8,7));
 console.log(add_a(8,7));

var add_v = function (a,b) {

    return a + b;

}

const add_a = (a,b) =>  {

    return a + b;

}

console.log(add_v(8,7));
console.log(add_a(8,7));


//console.log(add_v(8,7)); is not a function   miayn var add_v declaration e hoist linum
//console.log(add_a(8,7));  Cannot access 'add_a' before initialization const-y hoist chi linum ev ynknum e temporal dead zone