let arr = [1, [2, [3, [4]], 5,6]];
let ar = [];
function nest_arr(arr) 
{
    for (let index = 0; index < arr.length; index++) 
    {
         
        if (Array.isArray(arr[index])) 
        {
            nest_arr(arr[index]);
        } 
        else
        {     
            ar.push(arr[index]);
        }
    }
    
    return ar;
}

let a = nest_arr(arr);  
console.log(a);
