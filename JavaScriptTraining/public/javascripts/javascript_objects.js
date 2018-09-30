

function Shape() {

}

Shape.prototype.area = function() { console.log("Every shape has area, , but the subclass should override this function " +
                                    "to define their own logic of calculating area.") };
Shape.prototype.perimeter = function () { console.log("Every shape has perimeter, but the subclass should override this " +
                                "function to define their own logic of calculating perimeter.")};

function Rectangle() {

}

Rectangle.prototype = new Shape();//Rectangle object inherits Shape object, which means "area()" and "perimeter()" functions
//are available in Rectangle object too.

Rectangle.prototype.width = 0; //every Rectangle object will have width property
Rectangle.prototype.length = 0; //every Rectangle object will have height property


Rectangle.prototype.area = function() {
    return this.width * this.length;
};