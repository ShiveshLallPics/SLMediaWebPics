document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const popupMenu = document.getElementById('popupMenu');
    const closeBtn = document.querySelector('.close-btn');

    // Function to toggle the visibility of the popup menu
    function toggleMenu() {
        popupMenu.classList.toggle('show');
    }

    // Add event listeners for menu toggle and close button
    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close the menu if the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!popupMenu.contains(event.target) && event.target !== menuToggle) {
            popupMenu.classList.remove('show');
        }
    });
});






document.addEventListener('DOMContentLoaded', () => {
    // Select the gallery container
    const gallery = document.querySelector('.gallery');

    // Array of images with their types
    const images = [
        {src: 'https://lh3.googleusercontent.com/d/1xkqOTIg4RAST3dZu03cSCcNpwatqnJas', type: 'portrait'},
        {src: 'https://lh3.googleusercontent.com/d/1cntrUkOWC5z_m1kwdY-K2pJ7r0vG3aHl', type: 'landscape'},
        {src: 'https://lh3.googleusercontent.com/d/15hWM6xbwxUOLTpc4DsiV4-fM1rVAZ7M6', type: 'wildlife'},
        {src: 'https://lh3.googleusercontent.com/d/1m0kZwkuhBvQ42rN6OYAdaYWDHrqu_oXK', type: 'urban'},
        // Add more images as needed
    ];

    // Function to create the gallery with the provided images
    function createGallery(images) {
        gallery.innerHTML = ''; // Clear the gallery container
        images.forEach(image => {
            // Create a new gallery item
            const item = document.createElement('div');
            item.classList.add('gallery-item');
            item.innerHTML = `<img src="${image.src}" alt="${image.type}">`;
            gallery.appendChild(item); // Add the item to the gallery
        });
    }

    // Function to filter the gallery based on the selected type
    function filterGallery() {
        const filter = document.getElementById('filter').value; // Get the selected filter value
        const filteredImages = filter === 'all' ? images : images.filter(image => image.type === filter);
        createGallery(filteredImages); // Create gallery with the filtered images
    }

    // Initial gallery creation
    filterGallery();

    // Event listener for filter dropdown change
    document.getElementById('filter').addEventListener('change', filterGallery);
});
