function customFilter (array,callback)
{
    let result = [];

    for(let i =0; i < array.length;++i)
    {
        if(callback(array[i],i,array) == true)
        {result.push(array[i]);}

    }


    return result;
}


const numbers = [5,4,8,6,9,44,7,22];
let even = customFilter(numbers,num => num % 2 == 0);
console.log(even)