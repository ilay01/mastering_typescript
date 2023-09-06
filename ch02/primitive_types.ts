// ### undefined ###
// here we dont know the type of the variable, is ut a number? string? whatsoever?

// ### Null ###
// we know the type but not the value, so its null

// ### Conditional Expressions ###
// if is ? und then is :
// (conditional) ? (true statement) : (false statement);

const value: number = 10;
const message: string =
  value > 10 ? "value is larger than 10" : "value is 10 or less"; // can also be chained
console.log(message);

// ### Optional chaining ###
/*
when using object properties in JS, in particular nested properties, 
it is important to ensure that a nested property exists before attempting to access it
consider following code, which throws error messages
*/

var objectA = {
  nestedProerty: {
    name: "nestedPropertyName",
  },
};

function printNestedObject(obj) {
  console.log("obj.nestedProperty.name =" + obj.nested.Property.name);
}

printNestedObject(objectA);

// it will throw an error and won't continue with the code
// in JS its a huge thing to check whether a property exists to avoid runtime error

// so do some checking before like here

function printNestedObjectjs(obj: any) {
  if (
    obj != undefined &&
    obj.nestedProperty != undefined &&
    obj.nestedProperty.name
  ) {
    console.log(`name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

// and in Typescript its even easier

function printNestedOptionalChain(obj: any) {
  if (obj?.nestedProperty?.name) {
    console.log(`name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

// ### Nullish coalescing ###
// provides a default value if the variable is undefined or null

function nullishCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? `undefined or null`}`);
}

nullishCheck(1);
nullishCheck(null);

// other variant

function nullishaCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? 8}`); // here you define the standard
}

// ### Null or undefined  operands ###

// here we give b an optinal value if it is null or undefined
function testNullOperands(a: number, b: number | null | undefined) {
  let addResult = a + (b ?? 0);
}
