$("#registerService").click(function(event){
    event.preventDefault();

    //1. Get the values
    // Get the input fields values using jquery -> $("")  -> val
    

    //2. Use the values

});

$("#serviceName, #serviceDescription, #servicePrice")
    .css("border", "3px solid red");

$("#serviceName, #serviceDescription, #servicePRice").val();    

$("#serviceName, #serviceDescription, #servicePrice").on("input", function() {
    if ($(this).val().trim() !== "") {
        $(this).css("border", "");
    }
});

