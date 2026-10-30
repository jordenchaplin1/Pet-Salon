let pet1 = {
    name: "Tato",
    age: 5,
    breed: "Mixed",
    gender: "Male",
    service: "Nails"
};

let pet2= {
    name: "Walter",
    age: 8,
    breed: "Mixed",
    gender: "Male",
    service: "Nails"
};

 let pet3 = {
    name: "Rocky",
    age: 6,
    breed: "Mixed",
    gender: "Male",
    service: "Nails"
};


function displayPets(){
    let list = document.getElementById("list"); 
    list.innerHTML = `
        <li> ${pet1.name} </li>
        <li> ${pet2.name} </li>
        <li> ${pet3.name} </li>
    `;
}

displayPets();

