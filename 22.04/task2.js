
let user_ids = ["u1","u2","u3"];

let obj = 
{
    [user_ids[0]] : { score : 0},
    [user_ids[1]] : { score : 0},
    [user_ids[2]] : { score : 0},
};

obj[user_ids[1]].score += 10;

let newid =   "user4";
obj[newid] = {score : 0};

console.log(obj);