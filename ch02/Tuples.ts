// ### Tuples ###
// a finite number of nunnamed properties

let tuple1: [string, boolean];
tuple1 = ["test", true];
tuple1 = ["test"] // see warning message

// ### Tuple destructuring ###
//accessing certain values of tuples
console.log(`tuple1[0] : ${tuple1[0]}`);

// ### Optional Tuple Elements ###
// marked as ?  after the type
let tupleOptional: [string, boolean?];
tupleOptional = ['test'];

// ### Tuples and spread syntax ###
// all of these assignment are valid
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];

// ### Object destructuring
//  so we can access and handle them like tuples

let complexObject = {
    aNum:1,
    bStr: "name",
    cBool: true
}

let { aNum, bStr, cBool } = complexObject; // destructure

console.log(`aNum: ${aNum}`);
console.log(`bStr : ${bStr}`);

// we are also able to rename teh varuable name during destructing
let { aNum:objId, bStr:objName, cBool:isValid } = complexObject;
console.log(`objId : ${objId}`);