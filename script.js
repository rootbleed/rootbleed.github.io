document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Remove active class from all links
            tabLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Show the clicked tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});