var foo = function () {
    console.log("foo1")
}
foo()

var foo = function () {
    console.log("foo2")
}
foo()


function foo() {
    console.log("foo1")
}
foo()

function foo() {
    console.log("foo2")
}
foo()


//预编译
// var foo = undefined
// var foo = undefined
// function foo = function () {console.log("foo1")}
// function foo = function () {console.log("foo2")}
// foo = function () {console.log("foo1")}
// foo()
// foo = function () {console.log("foo2")}
// foo()
// foo()
// foo()
