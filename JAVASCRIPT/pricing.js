//Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const popupMenu = document.getElementById('popupMenu');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function() {
        popupMenu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        popupMenu.classList.remove('show');
    });

    // Close the popup menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!popupMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            popupMenu.classList.remove('show');
        }
    });
});
