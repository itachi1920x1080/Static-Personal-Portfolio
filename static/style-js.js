// Function must be in global scope to work with onclick="toggleMenu()" in HTML
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.querySelector(".pixel-btn-submit");
    const inputField = document.querySelector(".pixel-input");

    if (!sendBtn || !inputField) return;

    function sendMessage() {
        const message = inputField.value;

        if (message.trim() === "") {
            alert("[Error] Please enter a message before sending.");
            return;
        }


        alert("[Success] Your message has been prepared: " + message);
        
        const email = "itachi@gmail.com";
        const subject = "Multiplayer Connection";
        const body = message;

        window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }

    sendBtn.addEventListener("click", sendMessage);

    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        // 1. Select all timeline items
        const items = document.querySelectorAll('.timeline-item');

        // 2. Set up the Intersection Observer (The "Watcher")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the item enters the screen
                if (entry.isIntersecting) {
                    // Add the class 'visible' to make it appear
                    entry.target.classList.add('visible');
                    // Stop watching it so it doesn't animate again
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        // 3. Start watching every timeline item
        items.forEach(item => {
            observer.observe(item);
        });
    });
