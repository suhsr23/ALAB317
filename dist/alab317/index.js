"use strict";
class Vehicle {
    constructor(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, "four");
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, 2);
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", "Regal");
console.log(myBuick.wheels);
class NCycle {
    constructor(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
    print(index = 0) {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            if (index < this.make.length && index < this.model.length) {
                console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
            }
            else {
                console.log("This NCycle was not created properly.");
            }
        }
        else {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
    }
    printAll() {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            this.make.forEach((make, index) => {
                if (index < this.model.length) {
                    console.log(`This NCycle has a ${make} ${this.model[index]} at ${index}.`);
                }
                else {
                    console.log("This NCycle was not created properly.");
                }
            });
        }
        else {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
    }
}
const testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
const testCycle2 = new NCycle("This", "That", 4);
testCycle2.print();
testCycle2.printAll();
const testCycle3 = new NCycle("Make", "Model", 4);
testCycle3.print(4);
testCycle3.printAll();
const makes4 = ["Volkswagen", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();
const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();
function add(x, y) {
    return x + y;
}
if (typeof testCycle1.make === "number" && typeof testCycle5.model[1] === "number") {
    add(testCycle1.make, testCycle5.model[1]);
}
else {
    console.log("Cannot add these values.");
}
//# sourceMappingURL=index.js.map