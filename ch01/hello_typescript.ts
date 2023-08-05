var version =`es01`; // theoretisch definierst du deine Varibale hier   
// wichtig oben und unten backticks verwenden, sonst geht das nicht 
console.log(`was geht ${version}`); // und nutzt sie mit Dollarzeichen 

// da wir mit tsc --init eine tsconfig.json Dateil erstellt haben, können wir tsc einfach im cmd ausführen, ohne dateiname
// mit tsc -w passiert das automatisch - watch mode 

var myString: string = `this is a string`;
myString =`jason`;