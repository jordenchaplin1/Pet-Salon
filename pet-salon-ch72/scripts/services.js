// Create service objects.
console.log("services.js is connected");

function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

$(function() {
    const fields = $("#serviceName, #serviceDescription, #servicePrice");

    $("#serviceForm").on("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Highlight empty fields.
        fields.each(function() {
            const isEmpty = $(this).val().trim() === "";

            $(this).css(
                "border",
                isEmpty ? "2px solid red" : ""
            );

            if (isEmpty) {
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        // Create the new service.
        const newService = new Service(
            $("#serviceName").val().trim(),
            $("#serviceDescription").val().trim(),
            Number($("#servicePrice").val())
        );

        // Get previously saved services.
        const services = JSON.parse(
            localStorage.getItem("petSalonServices") || "[]"
        );

        // Add and save the new service.
        services.push(newService);

        localStorage.setItem(
            "petSalonServices",
            JSON.stringify(services)
        );

        // Clear the form and remove red borders.
        this.reset();
        fields.css("border", "");
    });

    // Remove red borders when information is entered.
    fields.on("input", function() {
        if ($(this).val().trim() !== "") {
            $(this).css("border", "");
        }
    });

    // Remove red borders when Clear Form is clicked.
    $("#serviceForm").on("reset", function() {
        fields.css("border", "");
    });
});