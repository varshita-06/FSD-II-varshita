//Namespace 
namespace MathOperation {

    export function add(a: number, b: number) {
        console.log(a + b);
    }
}

MathOperation.add(10, 30);

//generic Class
class Box<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display() {
        console.log(this.value);
    }
}

let numBox = new Box<number>(100);
numBox.display();

let strBox = new Box<string>("Hello");
strBox.display();

//Generic Function 
function display<T>(value: T): T {
    return value;
}

console.log(display<number>(50));
console.log(display<string>("TypeScript"));

//generic Constriants 
interface Length {

    length: number;
}

function printLength<T extends Length>(item: T) {
    console.log(item.length);
}

printLength("Hello");
printLength([10, 20, 30]);