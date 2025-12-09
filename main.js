document.addEventListener('DOMContentLoaded', function() {
    // Check if your JS functions are available
    console.log("DOM loaded, checking functions...");
    
    // Test hamburger menu
    const menuButton = document.querySelector('[aria-label="Toggle menu"]');
    console.log("Menu button found:", menuButton);
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            console.log("Menu clicked!");
            // Add your menu toggle logic here
        });
    }
});
