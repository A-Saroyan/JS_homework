
foo();
baz();

function foo()
{
    console.log("foo !");
}

let baz =  () =>  {

    console.log("baz !");
}

// baz() handisanum e Arrow function expression ev haytnvum e temporal dead zone-i mej, texi e unenum reference error foo()-n tpeluc heto