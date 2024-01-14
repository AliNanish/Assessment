// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-btn');
    const contactDialog = document.getElementById('contact-dialog');
    const body = document.body;

    // Set the current date in the designated <p> element
    const currentDateElement = document.getElementById('current-date');
    const dateButton = document.getElementById('date-button');
    const currentDate = new Date();
    currentDateElement.textContent = `Current Date: ${currentDate.toDateString()}`;

    contactButton.addEventListener('click', function () {
        contactDialog.style.display = 'block';
        body.classList.add('dialog-open');
    });

    contactDialog.addEventListener('click', function () {
        contactDialog.style.display = 'none';
        body.classList.remove('dialog-open');
    });

    // Define toggleText function
    function toggleText() {
        const textContainer = document.getElementById('text-container');
        textContainer.classList.toggle('collapsed');
    }

    // Assign toggleText to a global variable to make it accessible from HTML
    window.toggleText = toggleText;

    // Add a click event to the date button
    dateButton.addEventListener('click', function () {
        alert(`Today is ${currentDate.toDateString()}`);
        // You can replace the alert with your preferred way of displaying more details.
    });
});
