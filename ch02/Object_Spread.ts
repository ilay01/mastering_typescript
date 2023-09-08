// ### Object spread ###
// its about copying objects

let firstObj: object = { id: 1, name: "firstObj" };
let anotherObject: object = { name: "Hello" };
let secondObj: object = { ...firstObj }; // copy with three dots
console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let combineObject: object = { ...anotherObject, ...firstObj }; // copy mutltiple obj into one

// ### Spread precedence
// beide Objekte haben den Parameter name. Beim Kopiervorgang wird dieser einmal übernommen und das vom letzten Objet

// ### Spreading with arrays
// can be done and nothng will be replaced
let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];

// spread synstax is allowed as well

let object3 = [...firstArray, [5, 6, 6], ...thirdArray];
