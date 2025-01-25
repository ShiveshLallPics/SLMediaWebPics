//Code for menu button
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const popupMenu = document.getElementById('popupMenu');
            const closeButton = document.querySelector('.close-btn');

            if (menuToggle && popupMenu && closeButton) {
                menuToggle.addEventListener('click', function () {
                    popupMenu.classList.toggle('show');
                });

                closeButton.addEventListener('click', function () {
                    popupMenu.classList.remove('show');
                });
            } else {
                console.error("Menu toggle button, popup menu, or close button not found!");
            }
        });



