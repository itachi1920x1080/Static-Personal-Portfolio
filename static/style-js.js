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


document.addEventListener("DOMContentLoaded", () => {
            const skillData = {
                frontend: {
                    title: "Front-End",
                    icon: "fa-solid fa-code",
                    skills: [
                        { name: "HTML", level: "90%" },
                        { name: "CSS", level: "60%" },
                        { name: "Qt Designer", level: "85%" },
                        { name: "PyQt", level: "60%" },
                        { name: "Tkinter", level: "60%" }
                    ]
                },
                backend: {
                    title: "Back-End",
                    icon: "fa-solid fa-server",
                    skills: [
                        { name: "Python", level: "82%" },
                        { name: "Django", level: "60%" },
                        { name: "MySQL", level: "85%" }
                    ]
                },
                tools: {
                    title: "Tools",
                    icon: "fa-solid fa-screwdriver-wrench",
                    skills: [
                        { name: "Postman", level: "90%" },
                        { name: "GitHub", level: "80%" },
                        { name: "VS Code", level: "85%" },
                        { name: "PyCharm", level: "75%" }
                    ]
                },
                softskills: {
                    title: "Programming & Others",
                    icon: "fa-solid fa-user-group",
                    skills: [
                        { name: "C", level: "60%" },
                        { name: "C++", level: "65%" },
                        { name: "Problem Solving", level: "85%" },
                        { name: "Teamwork", level: "90%" }
                    ]
                }
            };

            const tabsContainer = document.getElementById('skills-tabs');
            const contentContainer = document.getElementById('skills-content');

            if (tabsContainer && contentContainer) {
                function renderContent(categoryKey) {
                    const data = skillData[categoryKey];
                    
                    // 1. Title
                    contentContainer.innerHTML = `<h3 class="category-title"><i class="${data.icon}"></i> ${data.title}</h3>`;

                    // 2. Bars
                    data.skills.forEach(skill => {
                        const barHTML = `
                            <div class="skill-bar-wrapper">
                                <div class="skill-info">
                                    <span>${skill.name}</span>
                                    <span>${skill.level}</span>
                                </div>
                                <div class="progress-line">
                                    <span data-width="${skill.level}"></span>
                                </div>
                            </div>
                        `;
                        contentContainer.innerHTML += barHTML;
                    });

                    // 3. Animation
                    setTimeout(() => {
                        const bars = contentContainer.querySelectorAll('.progress-line span');
                        bars.forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width');
                        });
                    }, 50);
                }

                let isFirst = true;
                for (const key in skillData) {
                    const data = skillData[key];
                    const tabBtn = document.createElement('div');
                    tabBtn.className = 'tab-card';
                    if (isFirst) tabBtn.classList.add('active');

                    tabBtn.innerHTML = `<i class="${data.icon}"></i> <span>${data.title}</span>`;

                    tabBtn.addEventListener('click', () => {
                        document.querySelectorAll('.tab-card').forEach(t => t.classList.remove('active'));
                        tabBtn.classList.add('active');
                        renderContent(key);
                    });

                    tabsContainer.appendChild(tabBtn);

                    if (isFirst) {
                        renderContent(key);
                        isFirst = false;
                    }
                }
            }
        });