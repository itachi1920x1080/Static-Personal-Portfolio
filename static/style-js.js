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