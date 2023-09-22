// Function to load content from the list.html file
function loadContentFromList(contentId) {
    fetch(`list.html#${contentId}`)
        .then(response => response.text())
        .then(data => {
            const contentPlaceholder = document.getElementById('content-placeholder');
            contentPlaceholder.style.opacity = 0; // Fade out

            setTimeout(() => {
                contentPlaceholder.innerHTML = data; // Replace content
                contentPlaceholder.style.opacity = 1; // Fade in
            }, 300); // Adjust the transition duration (in milliseconds)
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Add click event listeners to the links
document.querySelectorAll('.left-sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
        const contentId = link.getAttribute('data-content');
        loadContentFromList(contentId);
    });
});
