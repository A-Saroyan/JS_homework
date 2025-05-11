function regularFunction(a, b) {
    console.log("Regular function arguments:", arguments);
}
 
const arrowFunction = (a, b) => {
 
        console.log("Arrow function arguments:", arguments);  // chuni ir arguments object-y,jarangum e lexical scope-ic
                                                              // Referenece  error ete deifine arac chi artaqin scope-um
     
};

 
regularFunction(1, 2, 3);
arrowFunction(4, 5, 6);