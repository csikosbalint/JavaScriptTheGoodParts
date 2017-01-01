/**
 * Created by balintcsikos on 12/30/16.
 */

document.writeln("Hello Kata!");

var MYAPP = {
    name: "MYAPP"
};

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: "TypeError",
            message: "2 numbers are needed"
        }
    }
    console.log(this);
    console.log(arguments);
    return a + b;
};
var another_stooge = {
    a: "b",
    'method': function () {
        console.log("func call");
    },
    x: {
        a: "b",
        b: "a"
    }
};

for (name in another_stooge) {
    if (another_stooge.hasOwnProperty(name)) {
        document.writeln(typeof another_stooge[name]);
        document.writeln(name + ": " + another_stooge[name]);
    }
}

// console.log(add(5,6.0,"b"));
// console.log(add());
// another_stooge.b();

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);
myObject.increment(3);
console.log(myObject.value);

myObject.double = function () {
    var that = this; // this == myObject

    var helper = function () {
        console.log(this.value); // this != myObject BUT this == global object
        that.value = add(that.value, that.value);
    };

    helper();
};

myObject.double();
console.log(myObject.value);

var Quo = function (string) {
    this.status = string;
    // returns this (new Quo object)
};

Quo.prototype.get_status = function () {
    console.log(this.status);
    return this.status;
};

var myQuo = new Quo("cica");
console.log(myQuo.get_status());

// Quo("kutya");
// console.log(Quo.get_status());

console.log(add.apply(null, [7.6, 9.9]));

var statusObject = {
    status: 'A-OK'
};

Quo.prototype.get_status.apply(statusObject);

var sum = function () {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

try_it();

console.log(sum(5, 6, 7, 8));
