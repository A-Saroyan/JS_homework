
func.forEach((fn, index) => {
    console.log(`Function ${index}:`, fn());  // ReferenceError: Cannot access 'func' before initialization
  });


const func = [

    function decfunction () {
        return "decfunction !!!"
    },

     expfunc = function () {

       return "expfunction !!!";
    },

    arrowfunc = () => {
        return "arrowfunction !!!";
    }


]


func.forEach((fn, index) => {                      // Function 0: decfunction !!!
                                                   // Function 1: expfunction !!!
     console.log(`Function ${index}:`, fn());      // Function 2: arrowfunction !!!
  });

