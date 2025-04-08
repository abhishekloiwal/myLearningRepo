// Basic JavaScript file for the learning repository

// Function to display a welcome message
function showWelcomeMessage() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    
    console.log("Welcome to my learning repository!");
    console.log(`Today's date is: ${formattedDate}`);
    
    // If we're on a page with a welcome-message element, update it
    const welcomeElement = document.getElementById('welcome-message');
    if (welcomeElement) {
        welcomeElement.textContent = `Welcome! Today's date is: ${formattedDate}`;
    }
}

// Function to toggle visibility of elements
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}

// Execute when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showWelcomeMessage();
    
    // Add event listeners to any toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            toggleSection(sectionId);
        });
    });
});
