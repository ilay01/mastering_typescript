"use strict";
// how to type vorgeben in Typescript
// this is how you define types in mutiple variants
var item1 = { id: 1, name: "Max" };
var item1 = { id: 1, name: "Houston" };
var item1 = { id: 1, name: "Max" };
// var vs let
// the var version
var index = 0;
if (index == 0) {
    var index = 2; // vaariable re-decleration points to the previous variable decleration
    console.log('index = ${index}');
}
console.log('index = ${index}');
// output is index =2  index= 2;
// the let version
// let is block scoped temporary variable
let indexi = 0;
if (indexi == 0) {
    let indexi = 2;
    console.log('index = ${indexi}');
}
console.log('index = ${indexi}');
// output is index =2 index = 0
// -> let is preferred as usage overall
// mark constant variables as const
