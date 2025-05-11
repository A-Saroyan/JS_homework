let obj1 = 
{
    name : "Leo",
    surname : "Messi" ,
    birthday : {
                    day : 24,
                    month : "june",
                    year : 1987
                }

};

//let clone_obj = JSON.parse(JSON.stringify(obj1));

function deepClone(obj) 
{
    let clone_obj = JSON.parse(JSON.stringify(obj1));
    return clone_obj;
}

let c_obj = deepClone(obj1);

console.log(c_obj);

c_obj.birthday.year = 2025;

console.log(obj1);
console.log(c_obj);