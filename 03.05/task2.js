 function inerval ()
 {
   let count = 5;
   
   const inter_id = setInterval(()=> 
   {
        console.log(count);
        if(count == 0)
        {
            clearInterval(inter_id);
            console.log("Time`s up !!! ");
            
        }

        --count;
   },1000); 

 }


 inerval();