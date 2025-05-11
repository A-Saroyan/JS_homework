//'use strict'

let Person = { showThis : function () {console.log(this);}}

Person.showThis();

let x = Person.showThis;
x();


// Person.showthis() function-i jamanak tpuma Person object-y 
// x() tpelu jamanak qani vor assign enq arel tpuma x-i this-y vory handisanum e global object
// strict mode-i jamanak x() ktper undefined global object-i poxaren
