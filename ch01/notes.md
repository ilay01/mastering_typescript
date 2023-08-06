* inferred typing, heißt wenn wir nicht explizit nennen, um welchen Typ es sich handelt, wird typescript es automatisch für uns machen
* injecting variables with backticks 

to use typescript, please install
run sudo npm install -g typescript

check version
run tsc --version

make sure you are in the right folder place

to read the tsconfig file and make the entsprechende installments
run tsc

to keep tsc in watching mode, 
run tsc -w

to execute the freshly compiled ts code in js code, do this
run node <filename>.js

## VS Code Debugging

for that you need to create a .map file by uncommenting sourceMap at the tsconfig file;
set your breakpoint and start debugging, choose Node when asked 

## Declaration files
libraries are written in javascript. to add type annotations for helpfullnesss install the @types/... for example as it is the case for the inquirer library

run npm install --save-dev @types/inquirer