console.log("Hello Mike")

function foo(a) {
    var c = a + " bar";
    console.log(c);
}
foo("Foo")
foo("Beer")


var a = function funky(p) {
    console.log(p);
}
a("Hello")

const func2 = (arguments) => {
    console.log(arguments);
}
func2("Func2 reporting for duty!")