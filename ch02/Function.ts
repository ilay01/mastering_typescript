// ### Optional Parameters ###
// add optional elements with the question mark

function concatValues(a:string, b?:string) {
    console.log(`a+b`)
}

concatValues("first", "second");
concatValues("third");

// ### Default parameters

function concatWithDefault(a: string, b:string = "default") { //another way to say its default
    console.log(`+b = ${a+b}`);
}

concatWithDefault("first", "second");
concatWithDefault("third"); // the output will be default instead of undefined as above

// ### Rest parameters ###
// we dont need to specifiy input parameters in our js function, we can still access them via arguments
function testArguments() {
    for(var i=0; i < arguments.length; i++) {
        console.log("argument["+i+"] = " + arguments[i]);
    }
}

testArguments(1,2);
testArguments("first", "second", "third");

function testARguments(...args: string[] | number [] ) {
    for (let i in args) {
        console.log(`args`)
    }
}

// TS equivalent using REST Syntax

function testArgumentis(...args: string[] | number[]) { // rest syntax via ...args
    for (let i in args) {
        console.log(`args[$(i)] = ${args[i]}`);

    }
}

testArgumentis("1");
testArgumentis(10,20);

// ### Function callbacks ###
// a callback is a function that is passed in as an arugment to another function 
// we call a function and tell them what to do and when it is finished, we call the function that was provided
// a JS example
var myCallback = function(text) { // function wird als variable gespeichert
    console.log("myCallback called with " + text);
}

function withCallbackArgs(message, callbackFn) {
    console.log("withCallback called, message : " + message);
    callbackFn(message + " from with Callback");
}

withCallbackArgs("initial text", myCallback);

// runtime errors can happen if we pass variables instead of function -> use typeguards
// written in TS

function myCalliback(text:string):void {
    console.log(`myCallback called with ${text}`);
}

function withCallbackArg(
    message:string,
    callbackFn: (text:string) => void 
) {
    console.log(`withCallback called, message : ${message}`);
    callbackFn(`${message} from withCallback"`);
}

withCallbackArg("initial text", myCalliback);

// ### Function overrides ###

function add(a:string, b:string): string;
function add(a: number, b:number): number;
function add(a: any, b:any) {
    return a+b
}

add("first", "second");
add(1,2);
add(true, false) // hier kommt eine FEhlermeldung, denn obwohl dfeiniert, lehnt TS es ab! keep in mind

// ### Literals ###
// allows to use a hybrid of enums and tyoe aliases -> limits the allowed values to a sef of specified values

type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericalValues = 1 | 20 | 65535;

function withLiteral(input: AllowedNumericalValues | AllowedStringValues) {
    console.log(`called with ${input}`);
}

withLiteral("one")
withLiteral("two")
withLiteral("four") // this and one above is not allowed 
withLiteral(2)