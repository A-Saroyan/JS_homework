
function add_r(a,b)                             // regular function-y hoist  linelu hnaravorutyun uni, uni ir sepakan this-y
{
    return a+b;
}

const add_a = (a,b) => { return a + b; }   // arrow function chuni ir this-y,  vercnum e ayn this vortex define e arvac (lexical) 
                                           //  arrow function-i masy uxaki berum texadruma kanchvelu texy,


console.log(add_r(5,8));
console.log(add_a(8,8));


