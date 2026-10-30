function registerProduct(event){
    // Prevent the browser from being refreshed
    event.preventDefault();
    
    // 1. Get the input fields value
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let produceCategory = document.getElementById("productCategory").value;

    //console.log(`Name: ${productName} - Price: ${productPrice} - Category: ${produceCategory}`);

    // 2. Use the values
    // 2.1 Crete the object
    let newProduct = new Product(productName, productPrice, produceCategory);
    //console.log(newProduct);

    // 2.2 Display the product in the table
    let row = document.createElement("tr");
    row.innerHTML = `
        <td> ${newProduct.name} </td>
        <td> ${newProduct.price} </td>
        <td> ${newProduct.category} </td>
        <td> <button class="btn btn-danger delete-btn">Delete</button> </td>
    `;

    let body = document.getElementById("body");
    body.appendChild(row);


    // Delete functionality
    row.querySelector(".delete-btn").addEventListener("click",function(){

        let confirmation = confirm("Are you sure?");

        if(confirmation){
            row.remove();
        }

    });


    // Clear the fields
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}


function Product(nameValue, priceValue, categoryValue){
    this.name = nameValue;
    this.price = priceValue;
    this.category = categoryValue;
}