let arr = [5,6,7,5,11,55,41,11];

function unique_arr (ar) 
{
    let ar1 = [];
    for( let i in ar)
    {
        let num = ar[i];
        if (ar1.find(val => val == num) === undefined)
        {
            ar1.push(num);
        }
    }

    return ar1;
}




let u_arr = unique_arr (arr);
console.log(u_arr);