let arr =  [[1,2], ['a','b'], [true,false],[true,false]];

function first (ar)
{
  
    let f_arr = [];
    let temp = [];
    let j = 0;
    let i=0;

    while(ar[0][j] !== undefined)
    {
        

        for ( i = 0; i < ar.length; ++i) 
            { 
                
                temp.push(ar[i][j]);
        
            }
        
        ++j;
        f_arr.push(temp);
        temp =  [];    
        
    }

   
    
    return f_arr;
}


console.log(first(arr));
