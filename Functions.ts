//Functions
function greet(name: string) {
    console.log("Hello " + name);
}

greet("Varshita");

//return types 
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);
console.log(result);

//Arrow functions 

const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 4));
