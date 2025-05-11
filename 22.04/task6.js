 let arr = ['a','w','l','r','t','c','z'];

 function split_arr (ar,num)
 {
    let s_arr = [];
    let test_arr = [];
    let index = 0;
    for( let i = 0; i < ar.length; ++i)
    {
        if(index < num )
        {
            test_arr.push(ar[i]);
            ++index;
        }
        if(index === num)
        {
            index = 0;
            s_arr.push(test_arr);
            test_arr = [];
        }
        

    }

    if(test_arr.length > 0)
    {
        s_arr.push(test_arr);
        test_arr = [];  
    }

    return s_arr;
 }

 let ar1 = split_arr(arr,3);
 console.log(ar1);