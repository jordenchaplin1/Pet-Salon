function update(){
    // Teting the button and function connection
    // alert("Clicked!");

    // 1. Get the paragraphs by class -> getElementsByClassName
    let paragraphs = document.getElementsByClassName("text");
    console.log(paragraphs);

    // Access to paragraph 1 and change the text color to red.
    // ASK GOOGLE: JS Change text color
    paragraphs[0].style.color = "#6717b1";
    paragraphs[1].style.color = "#1882E0";

    // 2. Update the H2 text
    let title = document.getElementById("title");
    // innerHTML or textContent
}


function add(){
    // 1. Get the input value
    let text = document.getElementById("text").value;
    console.log(text);

    // 2. Display the value in the list
    let list = document.getElementById("list");
    list.innerHTML += `
        <li> ${text} </li>
    `;

    document.getElementById("text").value = "";
}
