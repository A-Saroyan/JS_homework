const Car = 
{
    name : "Lexus",
    log_a : () => {
        console.log(this.name );
    },

    log_r : function ()
    { console.log(this.name )}
}


Car.log_r()    // Lexus
Car.log_a();   // undefined  

// xndiry arrow function-i this-i bind chlinelu mej e 