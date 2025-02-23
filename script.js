document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check Local Storage for theme and apply correctly
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Theme Toggle Click Event
    themeToggle.addEventListener("click", function () {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactForm = document.getElementById("contact-form");

    contactButton.addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulated form submission (Replace with backend logic if needed)
        alert(`Thanks for reaching out, ${name}! I’ll get back to you soon.`);

        // Clear the form
        contactForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar");
    const navLine = document.querySelector(".nav-hover-line");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function (event) {
            const { left, width } = event.target.getBoundingClientRect();
            navLine.style.left = `${left}px`;
            navLine.style.width = `${width}px`;
        });

        link.addEventListener("mouseleave", function () {
            navLine.style.width = "0";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "Data Engineer | AWS Certified | Cloud Solutions";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    }
    typeEffect();
});
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const loadingMessage = document.getElementById("loading-message");

    // Function to get greeting based on time
    // Function to get dynamic greeting with day-based messages and personal branding
    function getGreeting() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

        let greeting = "";

        // Time-based greeting
        if (hour < 12) {
            greeting = "Good Morning! ☀️";
        } else if (hour < 18) {
            greeting = "Good Afternoon! 🌤️";
        } else {
            greeting = "Good Evening! 🌙";
        }

        // Add day-specific greetings
        const dayGreetings = {
            0: "Relax, it's Sunday! ☕",
            1: "Happy Monday! Let's start strong. 💪",
            2: "It's Tuesday! Keep pushing forward. 🚀",
            3: "Midweek hustle! Happy Wednesday. 📊",
            4: "Almost there! Happy Thursday. 🔥",
            5: "It's Friday! Time to wrap up the week. 🎉",
            6: "Weekend vibes! Happy Saturday. 🌴"
        };
        greeting += ` ${dayGreetings[day]}`;


        return greeting;
    }


    // Fun facts about you (Change/add more as needed)
    const funFacts = [
        "Data is the new oil, and I refine it! 🛢️📊",
        "I can optimize SQL queries in my sleep. 💤🔍",
        "Building scalable data pipelines, one ETL at a time! 🚀",
        "Data Engineer by day, problem solver by night! ⚡",
        "Recruiter detected! Let me impress you. 😃",
        "Turning messy data into beautiful insights! 💡",
        "Analytics? Automation? I've got you covered. ✅"
    ];

    // Pick a random message
    const randomMessage = funFacts[Math.floor(Math.random() * funFacts.length)];

    // Display greeting on one line and fun fact on the next line
    loadingMessage.innerHTML = `${getGreeting()}<br>${randomMessage}`;

    // Ensure preloader stays for at least 1.5 seconds
    setTimeout(() => {
        preloader.classList.add("hidden");

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 1700);
});

const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

async function fetchPyPiDownloads() {
    const pypiUrl = "https://pypistats.org/api/packages/sheetbuddy/recent";
    const downloadsElement = document.getElementById("pypi-downloads");

    try {
        const response = await fetch(pypiUrl);
        const data = await response.json();
        downloadsElement.innerText = data.data.last_month.toLocaleString() + " downloads";
    } catch (error) {
        console.error("Failed to fetch PyPI stats:", error);
        downloadsElement.innerText = "7K+ downloads"; // Fallback text
    }
}
fetchPyPiDownloads();
document.addEventListener("DOMContentLoaded", function () {
    // 📅 Auto Update Year
    document.getElementById("current-year").textContent = new Date().getFullYear();
    const visitorKey = "visitorCount";
    let count = localStorage.getItem(visitorKey);
    let randomIncrement = Math.floor(Math.random() * (3000 - 230 + 1)) + 1;

    if (!count) {
        count = 1; // First-time visitor
        count = randomIncrement; // First-time visitor gets a random count
    } else {
        count = parseInt(count) + 1;
        count = parseInt(count) + randomIncrement; // Increment by random value
    }

    localStorage.setItem(visitorKey, count);
    document.getElementById("count").textContent = count;
    document.getElementById("count").textContent = count; // Update the visitor count
});
// new effect for moods
// Greeting Based on Time
const hours = new Date().getHours();
let greeting = "👋 Hello!";
if (hours < 12) greeting = "🌅 Good Morning!";
else if (hours < 18) greeting = "🌞 Good Afternoon!";
else greeting = "🌙 Good Evening!";

document.getElementById("greeting").textContent = greeting;

// Live Time Update
function updateTime() {
    const now = new Date();
    document.getElementById("liveTime").textContent =
        `🕒 ${now.toLocaleTimeString()}`;
}
setInterval(updateTime, 1000);
updateTime();


