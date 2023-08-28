enum DoorState {
    Open, 
    Closed 
}

function checkDoorState (state: DoorState) {
    console.log(`enum value is : $(state)`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}

checkDoorState(DoorState.Open); // under the hood its give the value of 0
checkDoorState(DoorState.Closed); // here its 1

/* how it would look like if we would define the numbers
enum DoorState {
    Open=3, 
    Closed=7,
    Unspecified = 256 
} 
*/

// String enums

enum DoorStateString {
    OPEN="open", 
    CLOSED="closed"
} 

console.log(`OPEN = ${DoorStateString.OPEN}`)

// Const enums
// defined for performance reason because if we dont say const before the nu, JS will
// create a fully fledged JS Object, with const is less runtime 

const enum DoorStateConst {
    Open = 10,
    Closed = 20,
}

console.log(`const Closed = ${DoorStateConst.Open}`)
