// ### Interfaces ###
// a mechanism to define what properties an object must implement 
// -> a way do define custom types

interface IIdName {
    id: number;
    name: string;
}
// once defined you can use it as a primitive type and treated as such

// ### Optional properties ###

interface IOptional {
    id:number;
    name?: string;
}

// ### Weak types ###
// where all properties are optional
interface IWeakType {
 id?: number,
 name?: string
}

let weakTypeNoOverlap: IWeakType = {
    description: "a descripton"
}

// ### the in operator ###
// interrogate an object and see if it has a property using the in operator

interface IIdName {
    id:number;
    name:string;
}

interface IDescrValue {
    descr: string;
    value: number;
}

function printNameOrValue (
    obj: IIdName | IDescrValue) : void {
        if ('id' in obj) {
            console.log(`obj.name : ${obj.name}`);
        }
        if ('descr' in obj) {
            console.log(`obj.value : ${obj.value}`);
        }
    }
//using the function

printNameOrValue({
    id:1,
    name:"nameValue"
});

printNameOrValue({
    descr: "description",
    value: 2
})

// ### keyof ###
// defining an interrface named iPerson that defines two properties -> id and name
// then we crate a string literal type for this interface
interface IPerson {
    id: number;
    name: string;
}

type PersonPropertyName = keyof IPerson;

// equivalent to the following statement

type PersonPropertyLiteral = "id" | "name"

//using the type as follows
function getProperty(key:PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`);
}

getProperty("id", 
{id: 1, name: "firstName"}
);

getProperty("name", 
{id: 2, name: "secondName"}
);

getProperty("telephone", 
{id: 1, name: "firstName"}
);


