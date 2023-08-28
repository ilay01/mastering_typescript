"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
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
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "open";
    DoorStateString["CLOSED"] = "closed";
})(DoorStateString || (DoorStateString = {}));
console.log(`OPEN = ${DoorStateString.OPEN}`);
console.log(`const Closed = ${10 /* DoorStateConst.Open */}`);
