class Service {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }
}

$(document).ready(function() {
    // Initialize an array to store services
    const services = [];

    // Form submission event
    $('#service-form').on('submit', function(event) {
        event.preventDefault();

        // Get form values
        const description = $('#service-description').val();
        const price = parseFloat($('#service-price').val());

        // Validate form values
        if (description && price) {
            // Create a new service object
            const newService = new Service(description, price);
            services.push(newService);

            // Clear the form
            $('#service-form')[0].reset();

            // Display notification
            $('#service-notification').fadeIn().delay(2000).fadeOut();
        } else {
            alert("Please fill out all fields");
        }
    });
});
