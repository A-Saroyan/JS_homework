
  let obj = {

    name : "JS",

    rmethod : function () {console.log("rmethod => ",this);},
    amethod : () => {console.log("amethod => ",this);}

}



obj.rmethod(); // dinamikoren bind e linum obj-i this-in,vor objecti  vra kanchvel e (dynamic binding)
obj.amethod(); // arrow function chi yndunum obj-i this vorpes ir this, vercnum e ayn this vortex define e arvac (lexical) 
               //sepakan this chuni ir moduli this-na vercnum dra hamar datark object e tpum