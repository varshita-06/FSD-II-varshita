class Student {

    name: string = "Varshita";

    display() {
        console.log(this.name);
    }
}

let s = new Student();
s.display();

let student = {
    name: "Varshita",
    age: 20,
    city: "Vijayawada"
};

console.log(student.name);
console.log(student.age);

//Constructor 
class Employee {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

let emp = new Employee("Rahul");
emp.display();

//Access Modifiers 
class Student {

    public name: string = "Varshita";
}

let s = new Student();
console.log(s.name);

class Student {

    private age: number = 20;

    showAge() {
        console.log(this.age);
    }
}

let s = new Student();
s.showAge();

class Animal {

    protected sound: string = "Bark";
}

class Dog extends Animal {

    display() {
        console.log(this.sound);
    }
}

let d = new Dog();
d.display();