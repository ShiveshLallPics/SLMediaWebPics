document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const popupMenu = document.getElementById('popupMenu');
    const closeBtn = document.querySelector('.close-btn');
    const gallery = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const closeLightbox = document.querySelector('.close-lightbox');
    const filterSelect = document.getElementById('filter');
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');

    nextButton.textContent = '▶';
    prevButton.textContent = '◀';

    nextButton.classList.add('lightbox-nav-button', 'next');
    prevButton.classList.add('lightbox-nav-button', 'prev');

    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);

    lightbox.style.display = 'none';

    let currentImageIndex = 0;
    let filteredImages = [];

    function openLightbox(imgIndex) {
        currentImageIndex = imgIndex;
        lightbox.style.display = 'flex';
        lightboxImg.src = filteredImages[currentImageIndex].src;
    }

    function closeLightboxFunc() {
        lightbox.style.display = 'none';
    }

    closeLightbox.addEventListener('click', closeLightboxFunc);
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightboxFunc();
        }
    });

    // Navigation Buttons
    nextButton.addEventListener('click', () => {
        changeImage((currentImageIndex + 1) % filteredImages.length);
    });

    prevButton.addEventListener('click', () => {
        changeImage((currentImageIndex - 1 + filteredImages.length) % filteredImages.length);
    });

    function changeImage(newIndex) {
        lightboxImg.style.opacity = 0;
        setTimeout(() => {
            currentImageIndex = newIndex;
            lightboxImg.src = filteredImages[currentImageIndex].src;
            lightboxImg.style.opacity = 1;
        }, 300); // Adjust the delay as needed
    }

    // Menu Toggle
    function toggleMenu() {
        popupMenu.classList.toggle('show');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    document.addEventListener('click', (event) => {
        if (!popupMenu.contains(event.target) && event.target !== menuToggle) {
            popupMenu.classList.remove('show');
        }
    });

    // Image Data
    const images = [
        { src: 'https://lh3.googleusercontent.com/d/1shB4O25D37ZAWH-uiUIbCUuH4fGOULup', type: 'weddings', alt: 'Bride and groom exchanging vows' },
        { src: 'https://lh3.googleusercontent.com/d/1kJb_CGnKKXDE0VnlDrdD7IHEOl2y0-GH', type: 'weddings', alt: 'Wedding ceremony' },
        { src: 'https://lh3.googleusercontent.com/d/1ynAhqPoCUnL8pQcJZRvHrAHqwMhkHDc9', type: 'weddings', alt: 'Couple posing for photos' },
        { src: 'https://lh3.googleusercontent.com/d/1_b3GipdB17YvWNmjAxyquP75jft3eLdU', type: 'weddings', alt: 'Wedding reception' },
        { src: 'https://lh3.googleusercontent.com/d/1_lhIJvuf20TE1--sEk8zezJDsOPCKovX', type: 'weddings', alt: 'Bride getting ready' },
        { src: 'https://lh3.googleusercontent.com/d/17DObmHEgcSnpcoNgoZ5FkTrQDZCvjOb-', type: 'weddings', alt: 'Groom and groomsmen' },
        { src: 'https://lh3.googleusercontent.com/d/1mUc1WYQin-QOHIxugHs8RATJWJe_7jm_', type: 'weddings', alt: 'Wedding cake' },
        { src: 'https://lh3.googleusercontent.com/d/1USvvKIf3C3K0pIS7P_24BJTRR1n3amJm', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1Op4a8Ej08xKy1S2ELsxW8tYkaXLG6nj7', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1uZhT99oA_xiA_t2x6SUdM52B4TEGE0zb', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1eMY7IK9TfMae-EJGAGFZePvfCzU7TFW2', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1UlvdozuvzgWqv6NGaN3Nu1jH_vgwLDMM', type: 'weddings', alt: 'Conference hall' },  
        { src: 'https://lh3.googleusercontent.com/d/1_00GT6xzIHPY6cz4UZzkuKODq6tO0iyv', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1DN2sJCJumcQRndXfVzoOWCptiyuI5Ltp', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/10nkc8hmTrFaHzsI8hnEkya3p4QtnAZB_', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1TecOAODnJ_h1TraGEJoaqeUCm82QqJsI', type: 'weddings', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1QXWHYD9f6D1s-T7OOaDp3-O2UJ56-zPl', type: 'engagement', alt: 'Couple in a park' },
        { src: 'https://lh3.googleusercontent.com/d/1nt7w8wUdXrtvMgbjIAlVAVVWmc3Wgype', type: 'engagement' },
        { src: 'https://lh3.googleusercontent.com/d/1YH8Ua4ylbndA4PIpujcAFDaC_JGjQSyQ', type: 'engagement' },
        { src: 'https://lh3.googleusercontent.com/d/1Ol_AKNqkZDCiMRhvt7zQc4nN6Hy8CnFA', type: 'engagement' },
        { src: 'https://lh3.googleusercontent.com/d/1uXKVry1JD6We0N8o4cfe4R027xuHckEi', type: 'landscape', alt: 'Mountain landscape' },
        { src: 'https://lh3.googleusercontent.com/d/1898MFGBTni2f30ymktx7yJHht1A_GODx', type: 'landscape', alt: 'Beach sunset' },
        { src: 'https://lh3.googleusercontent.com/d/1IB1YYZ8fYmBNxs8sifzlGttqjuY5x97c', type: 'landscape', alt: 'Forest scene' },
        { src: 'https://lh3.googleusercontent.com/d/1527i4Bavskh_WRLTosQEFCE_Xtx6SdCh', type: 'landscape', alt: 'City skyline' },
        { src: 'https://lh3.googleusercontent.com/d/1y7iWrMxu-Dd66DGpKoFSEG2leLaKUAnF', type: 'portrait', alt: 'Headshot of a person' },
        { src: 'https://lh3.googleusercontent.com/d/1YMxk-dRQpWGuy2zv1eoEn2GGkfsNjgVL', type: 'portrait', alt: 'Full body portrait' },
        { src: 'https://lh3.googleusercontent.com/d/12tszn1Uk00hTPTRDnGYPQLBnYIYn1EO4', type: 'portrait', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/', type: 'portrait', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/15bzZm15w-PVM0b9Qy6XUioFio5EJQGdm', type: 'automotive', alt: 'Sports car' },
        { src: 'https://lh3.googleusercontent.com/d/1ePdoyNgu1DCWt9AmECUMytcTVH2blKwt', type: 'automotive', alt: 'Classic car' },
        { src: 'https://lh3.googleusercontent.com/d/1GecXTN7Z6-k-uIcylHdkktOmUuALjqBq', type: 'automotive', alt: 'Luxury car' },
        { src: 'https://lh3.googleusercontent.com/d/1k3r6-JtnNAORKG7g__720ihz9FyAjY-q', type: 'events', alt: 'Concert crowd' },
        { src: 'https://lh3.googleusercontent.com/d/1NqHs9VAxCgTfxLPH9KFijcdco5zpGvW4', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1PY52eJfe_WCZS-cREYip_ALNL-k0nKza', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1ZLnhg1s6uLzEGR9lP3BxetsgHghK0ukK', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1Gt28DK1_cv3DgfdXLKcla92kPZQdBX2J', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/15SyK3upLy56FXXhM_zlTYv_RmGsRO0mJ', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1SlyYRmXgj8u8n_n6M95STvYS5T9zkhsB', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1_fhIWHMoxZf73l94BZRWsEMTd2uSPTlK', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1_7IE_sF85hHT0SLvMcTzVn4hH30TCDPe', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1JQ81hA5Wy3EzPsGfUU0-CDVGneJG9lcP', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1lNDcM_3PUjj4qPgyb8kUMJGpWTOqp6Fz', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1Op0IPaMp5weu7FdNeeIqP-L9CtG78pVX', type: 'events', alt: 'Conference hall' },
        { src: 'https://lh3.googleusercontent.com/d/1qqsMWM4kjEV_hIkStEjj3NMR_uc3WZok', type: 'food', alt: 'Delicious meal' },
        { src: 'https://lh3.googleusercontent.com/d/16oRfQK6qsxC1x-FIdo9PwvX6r13XvPuJ', type: 'food', alt: 'Close-up of food' },
        { src: 'https://lh3.googleusercontent.com/d/1tDkTMXf_9uOGEfimOSwU-40MtCpAissK', type: 'action', alt: 'Athlete in motion' },
        { src: 'https://lh3.googleusercontent.com/d/1hANTXqaA8VKeVQRhm-581Bknwwwp-EMQ', type: 'action', alt: 'Sports action' },
        // ... more images with descriptive alt text
    ];

    // Gallery Creation
    function createGallery(images) {
        gallery.innerHTML = '';
        images.forEach(image => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');
            item.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            gallery.appendChild(item);
        });
    }

    // Event Delegation for Lightbox
    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const allImages = gallery.querySelectorAll('.gallery-item img');
            const clickedIndex = Array.from(allImages).indexOf(event.target);
            openLightbox(clickedIndex);
        }
    });

       // Filter
       function filterGallery() {
        const filter = filterSelect.value;
        filteredImages = filter === 'all' ? images : images.filter(image => image.type === filter);

        // Ensure the clicked image remains in the gallery
        if (filteredImages.length > 0) {
            // If the current image is no longer in the filtered list, reset to the first image
            if (!filteredImages.includes(images[currentImageIndex])) {
                currentImageIndex = 0;
            }
        }
        createGallery(filteredImages);
        // After filtering, reopen the lightbox with the correct image index
        if (filteredImages.length > 0) {
            lightboxImg.src = filteredImages[currentImageIndex].src;
        }
    }

    filterSelect.addEventListener('change', filterGallery);

    // Initial Gallery Creation
    filteredImages = images;
    createGallery(filteredImages);

    // Swipe functionality
    let startX = 0;
    let endX = 0;

    lightbox.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    lightbox.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    lightbox.addEventListener('touchend', () => {
        const swipeDistance = endX - startX;
        if (Math.abs(swipeDistance) > 50) { // Adjust the threshold as needed
            if (swipeDistance > 0) {
                // Swipe right
                changeImage((currentImageIndex - 1 + filteredImages.length) % filteredImages.length);
            } else {
                // Swipe left
                changeImage((currentImageIndex + 1) % filteredImages.length);
            }
        }
    });
});
