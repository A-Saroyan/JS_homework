(function() {
    console.log("Inside IIFE, before assignment:", z); //  undefined
    var z = 42;
    console.log("Inside IIFE, after assignment:", z);  //  42
  })();
  
  console.log("Outside IIFE:", typeof z); //  undefined
  console.log("Accessing z directly:", z); // Throws ReferenceError

  // function-i scope-i meja hoist linum
  // scope-ic durs hasaneli chi