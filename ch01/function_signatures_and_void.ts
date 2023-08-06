function calculate(a:number,b:number,c:number) {
    return (a*b)+c;
}
console.log("calculate () = " + calculate(2,3,1));
// the solution will be 7
// however if we would write this code in javascript and input the numbers as string,
// we would get 61 

/**
 * 
 * Given a string value, log it to console
 * 
 * @param a the input string
 */
function printString(a: string) : void {
    console.log(a)
}
// here we say that there is no returning value of printString -> void 
// plus we add a js doc, important that function should follow directly to the next line
