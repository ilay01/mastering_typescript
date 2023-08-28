// Type Aliases
// to specify a type union and giving it a name

// define your type union and give it a name 
type StringOrNumber = string | number;

function addWithTypeAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
 ) {
    return arg1.toString() + arg2.toString();
 }