// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the navLinks element
    var navLinks = document.getElementById("navLinks");

    // Function to show the menu
    function showMenu() {
        navLinks.style.right = "0";
    }

    // Function to hide the menu
    function hideMenu() {
        navLinks.style.right = "-200px";
    }

    // Add event listeners to the menu buttons
    document.querySelector('.fa-bars').addEventListener('click', showMenu);
    document.querySelector('.fa-times').addEventListener('click', hideMenu);
});