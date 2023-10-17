// ### Classes ###
// A class is the definition of an object, what data it holds, and what operations it can perform

class SimpleClass {
    id: number | undefined ; 
    // ganz wichtig, KLasse wird initialisiert und die Variablen brauchen Werte. 
    //Daher einfach undefined nehmen, sonst meckert er. Conscous Decision
    print(): void {
        console.log(`SimpleClass.print() was called.`)
        console.log(`${this.id}`) // we need this to refer to the class variabvle 
    }
}

let mySimpleClass = new SimpleClass()
mySimpleClass.print()

// ### this keyword ###

// If we need to access a property of the class instance,, we need to use this! 
mySimpleClass.id=2020;
mySimpleClass.print()

// ### Implementing Interfaces ###
// interface describe a custom type and can include properties and functions
// a class is the definition of an object, also including its properties and functions
// we can use interace to describe some common behavour within a set of classes

/*
class ClassA {
    print(): void {
        console.log(`ClassA.print() claled.`)
    }
}

class ClassB {
    print(): void {
        console.log(`ClassB.print() called.`)
    }
}
*/

interface IPrint {
    print():void
}

function printClass(a: IPrint) {
    a.print();
}

class ClassA implements IPrint{
    print(): void {
        console.log(`ClassA.print() called.`)
    }
}

class ClassB implements IPrint{
    print(): void {
        console.log(`ClassB.print() called.`)
    }
}

//also we redefine the print function for each class but still the print function is related to 
//IPrint so that using the printClass function is possible

let classA = new ClassA();
let classB = new ClassB();
printClass(classA)
printClass(classB)

// thus the following example won't work but it does... dont know

class ClassC {
    print(): void {
        console.log(`ClassB.print() called.`)
    }
}
let classC = new ClassC()
printClass(classC)

// ### Class constructors ###

// Konstruktordefiniion falls du beim Erstellen der Klasse direkt was initialisieren willst
class ClassWithConstructor {
    id: number;
    constructor(_id:number) { // can also be rewritten as id:number
        this.id = _id;
    }
}

let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`)

// ### Class modifiers ###
// public and private class variables

class ClassWithPublicProperty {
    public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
    private id:number;
    constructor(id:number) {
        this.id = id
    }
}
let privateAccess = new ClassWithPrivateProperty(10);
privateAccess.id = 20; // see its error message 

// ### Constructor parameter properties ###
// private class variables remain private
class ClassWithCtorMods {
    constructor(public id:number, private name: string) {

    }
}

let myClassMod = new ClassWithCtorMods(1,"test")
console.log(`the id of classMod ${myClassMod.id}`);
console.log(`the name of classMod ${myClassMod.name}`); // see error message 

// ### Readonly ###
// similar to const -> once asssigned, it cannot be reassigned

class ClassWithReadonly {
    readonly name: string;
    constructor(_name:string) {
        this.name=_name
    }
    setNameValue (_name: string) {
        this.name = _name; // see error message
    }
}