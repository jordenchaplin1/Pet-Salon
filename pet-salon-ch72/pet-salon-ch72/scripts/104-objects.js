// Primitive / Basic
let name = "Fernanda";
let age = 34;
let isStudent = false;

let name2 = "Shanee";
let age2 = 20;
let isStudent2 = true;

// Non-Primitive / Advance (Complex)
// Object Literal
let student1 = {
    name: "Fernanda", 
    age: 34,
    isStudent: false
};

// 1. Access to the values -> .
// objectName.property
student1.age

console.log(student1.age);
console.log(student1.name);
console.log(student1.isStudent);

// Exercise: 
// Create 2 more objects literal -> student2 and student3.
// Print their name, age, and status (isStudent).
// Note: Values can be anything, but properties should be name, age, and isStudent.

// New Concept: Interpolation
console.log(`Hello, my name is ${student1.name}, I am ${student1.age} years old.`);

function displayStudent(){
    let myParagraph = document.getElementById("paragraph");
    myParagraph.innerHTML = `Hello, my name is ${student1.name}, I am ${student1.age} years old.`;
}

displayStudent();

// ===== Object Constructor =====
function Student(nameValue, ageValue, isStudentValue){
    this.name = nameValue;
    this.age = ageValue;
    this.isStudent = isStudentValue;
}

let student = new Student("Fernanda", 34, false);
console.log(student.name);
console.log(` ${student.age} - ${student.isStudent} `);


// Products

function Product(name, price){
    this.name = name;
    this.price = price;
}

let p = new Product("Apple", 10);
console.log(`The product is ${p.name}, and the price is ${p.price}.`);