function add(x, y)
{
    return x + y;
}

var addFunction = new Function("x", "y", "console.log(x + y)");

function average() {
    var total = 0;
    for (var index = 0; index < arguments.length; index++) {
        total += arguments[index];
    }
    return (total / arguments.length);
}


function test() {
    //if no return statement, then calling this function and storing the result of this function will be an 'undefined' value.

    return null;
}

console.log(test());


function Circle(radius) {

    if (Circle.count) {
        Circle.count++;
    }
    else {
        Circle.count = 1;
    }

    this.radius = radius;
    this.area = function() {
        return (22.0 / 7) * radius * radius;
    }
}

var c1 = new Circle(10);
console.log(c1.radius);
console.log("Area = " + c1.area());