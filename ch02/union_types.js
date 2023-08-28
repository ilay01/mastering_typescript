"use strict";
// Union Types are a type combination of two or more other types+
function printObject(obj) {
    console.log(`objc = ${obj}`);
}
printObject(1);
printObject("string value");
// TypeGuards
// useful to handle different types and their corresponding outputs
function addWithUnion(arg1, arg2) {
    //return arg1 + arg2;
    return `siehe fehlermeldung when uncommented`;
}
// fehlermeldung as you can see -> thats why we use typeguards
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`);
    return arg1.toString() + arg2.toString();
}
console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1, 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` 1, "2" = ${addWithTypeGuard(1, "2")}`);
