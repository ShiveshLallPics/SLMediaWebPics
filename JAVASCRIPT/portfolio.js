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
        {src: 'https://lh3.googleusercontent.com/d/1shB4O25D37ZAWH-uiUIbCUuH4fGOULup', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/1kJb_CGnKKXDE0VnlDrdD7IHEOl2y0-GH', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/1ynAhqPoCUnL8pQcJZRvHrAHqwMhkHDc9', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/1_b3GipdB17YvWNmjAxyquP75jft3eLdU', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/1_lhIJvuf20TE1--sEk8zezJDsOPCKovX', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/17DObmHEgcSnpcoNgoZ5FkTrQDZCvjOb-', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/1mUc1WYQin-QOHIxugHs8RATJWJe_7jm_', type: 'weddings'},
        {src: 'https://lh3.googleusercontent.com/d/1QXWHYD9f6D1s-T7OOaDp3-O2UJ56-zPl', type: 'engagement'},
        {src: 'https://lh3.googleusercontent.com/d/1uXKVry1JD6We0N8o4cfe4R027xuHckEi', type: 'landscape'},
        {src: 'https://lh3.googleusercontent.com/d/1898MFGBTni2f30ymktx7yJHht1A_GODx', type: 'landscape'},
        {src: 'https://lh3.googleusercontent.com/d/1IB1YYZ8fYmBNxs8sifzlGttqjuY5x97c', type: 'landscape'},
        {src: 'https://lh3.googleusercontent.com/d/1527i4Bavskh_WRLTosQEFCE_Xtx6SdCh', type: 'landscape'},
        {src: 'https://lh3.googleusercontent.com/d/1y7iWrMxu-Dd66DGpKoFSEG2leLaKUAnF', type: 'portrait'},
        {src: 'https://lh3.googleusercontent.com/d/1YMxk-dRQpWGuy2zv1eoEn2GGkfsNjgVL', type: 'portrait'},
        {src: 'https://lh3.googleusercontent.com/d/15bzZm15w-PVM0b9Qy6XUioFio5EJQGdm', type: 'automotive'},
        {src: 'https://lh3.googleusercontent.com/d/1ePdoyNgu1DCWt9AmECUMytcTVH2blKwt', type: 'automotive'},
        {src: 'https://lh3.googleusercontent.com/d/1GecXTN7Z6-k-uIcylHdkktOmUuALjqBq', type: 'automotive'},
        {src: 'https://lh3.googleusercontent.com/d/1k3r6-JtnNAORKG7g__720ihz9FyAjY-q', type: 'events'},
        {src: 'https://lh3.googleusercontent.com/d/1NqHs9VAxCgTfxLPH9KFijcdco5zpGvW4', type: 'events'},
        {src: 'https://lh3.googleusercontent.com/d/1qqsMWM4kjEV_hIkStEjj3NMR_uc3WZok', type: 'food'},
        {src: 'https://lh3.googleusercontent.com/d/16oRfQK6qsxC1x-FIdo9PwvX6r13XvPuJ', type: 'food'},
        {src: 'https://lh3.googleusercontent.com/d/1tDkTMXf_9uOGEfimOSwU-40MtCpAissK', type: 'action'},
        {src: 'https://lh3.googleusercontent.com/d/1hANTXqaA8VKeVQRhm-581Bknwwwp-EMQ', type: 'action'},






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

document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    
    galleryItems.forEach(item => {
      item.style.objectFit = "cover"; // Ensures images cover the container without distortion
    });
  });
  