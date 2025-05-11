
foo();
bar();

function foo()
{
    console.log("foo !");
}

const bar = function () {

    console.log("bar !");
}


// foo() => function declaration a (entarkvum en hoisting-i)
// const bar = function () =>  function expression (const-ov haytararvacy chi entarkvum hoisting-i) ("temporal dead zone" (TDZ) -i mej)
