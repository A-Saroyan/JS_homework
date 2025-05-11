function customForEach (array,callback)
{
    for(let i = 0;i<array.length ;++i)
    {
        callback(array[i],array,i);
    }
}

let arr = ["hello",15,48,55,"bye"];
customForEach(arr,elem => console.log(elem));