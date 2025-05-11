
 function customMap(array,callback)    
{
    let result = []

    for(let i = 0; i< array.length ; ++i)
    {
        result.push(callback(array[i]))
    }

    return result;

}


const numbers = [1, 2, 3, 4];
const square = customMap(numbers, num => num * num);

console.log(square);  
