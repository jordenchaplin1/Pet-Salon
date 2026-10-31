//1. Define the array
let namesList = ["Fernanda", "Ryan", "Shanee", "Kydani", "Thai", "John"];
let gradesList = [8, 9, 10, 6, 7, 8];

//2. Access to an item -> index
//arrayName[index] -> namesList[0] -> Fernanda
console.log(namesList[2]);
console.log(namesList[5]);


//3. Travel the array -> for loop
console.log("------ for loop ------");

for(let i=0; i<namesList.length; i++){
    console.log(namesList[i]);
}

// ==== Array of Objects ====
let studentsList = [
    {
        name: "Fernanda",
        age: 34
    },

    {
        name: "Luis",
        age: 33
    },

    {
        name: "Samantha",
        age: 20
    }
];

// Console Log the First Student Name
console.log("--------------");
console.log(studentsList[0].name);

// Console log the third student age
console.log(studentsList[2].age);

// Print this sentence with first student's information
// `Hey, this is _______ and I am ______ years old.`