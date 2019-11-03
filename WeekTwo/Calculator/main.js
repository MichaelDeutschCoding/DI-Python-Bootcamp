
let a = '';
let b = '';
let oper;
let result;


function num(numbutt) {
    if (typeof(a) == "number") {
        b += numbutt;
        // console.log("var b is " + b);
    }
    else {
        a += numbutt;
        // console.log("var a is " + a);
    }
}

function my_f(button) {
    if (button == "=") {
        b = Number(b);
        if (oper == "+") {
            result = (a + b);
        }
        else if (oper == "-") {
            result = (a - b);
        }
        else if (oper == "/") {
            result = (a / b);
        }
        else if (oper == "*") {
            result = (a * b);
        }
        console.log(a + " " + oper + " " + b + " = " + result);
        // alert(result);
    }
    else {
       a = Number(a);
       console.log(a)
        oper = button;
    }
}

function clr() {
    console.log("Cleared");
    a = '';
    b = '';
    oper = undefined;
}