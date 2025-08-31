document.addEventListener("DOMContentLoaded", function () {
    // =======================
    // Contact Form (EmailJS)
    // =======================
    emailjs.init("aQGo-Oe-LBT29FNy0");

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let subject = document.getElementById("subject").value;
            let message = document.getElementById("message").value;

            if (!name || !email || !subject || !message) {
                alert("Please fill in all fields.");
                return;
            }

            emailjs.send("service_7a1n93x", "template_syk5h2p", {
                name: name,
                email: email,
                subject: subject,
                message: message
            })
            .then(function (response) {
                console.log("✅ Email sent successfully!", response);
                alert("✅ Message sent successfully!");
                form.reset();
            })
            .catch(function (error) {
                console.error("❌ Email error:", error);
                alert("❌ Failed to send message. Please try again.");
            });
        });
    }

    // =======================
    // Chatbot
    // =======================
    const chatToggle = document.getElementById("chat-toggle");
    const chatbot = document.getElementById("chatbot");

    if (chatToggle && chatbot) {
        chatToggle.addEventListener("click", () => {
            chatbot.classList.toggle("show"); // uses CSS class for animation
        });
    }

    // Handle sending messages
    window.sendMessage = function () {
        let input = document.getElementById("user-input");
        let message = input.value.trim();
        if (message === "") return;

        addMessage("You", message);
        input.value = "";

        // Bot response after delay
        setTimeout(() => {
            let response = getBotResponse(message);
            addMessage("Bot", response);
        }, 600);
    };

    // Add message to chat
    function addMessage(sender, text) {
        let chatBody = document.getElementById("chat-body");
        let msg = document.createElement("div");
        msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Bot responses
    function getBotResponse(input) {
        input = input.toLowerCase();

        if (input.includes("construction")) return "We offer general construction, renovations, and project management services.";
        if (input.includes("plumbing")) return "Our plumbing team handles repairs, installations, and maintenance.";
        if (input.includes("roofing")) return "We provide roofing installation, repairs, and waterproofing.";
        if (input.includes("ceiling")) return "Yes, we install and repair ceilings for homes and offices.";
        if (input.includes("painting")) return "We handle both residential and commercial painting services.";
        if (input.includes("paving")) return "We provide high-quality paving for driveways, walkways, and commercial spaces.";
        if (input.includes("safety")) return "We provide Occupational Health & Safety services, workplace inspections, and safety files.";
        if (input.includes("wellness")) return "We focus on worker wellness programs, ensuring a safe and productive workforce.";
        if (input.includes("contact")) return "You can reach us at 083 343 4885 or visit us at Secunda, Mpumalanga Province.";
        if (input.includes("hello") || input.includes("hi")) return "Hello 👋! How can I assist you today?";

        return "I'm not sure about that. You can ask me about our services like construction, plumbing, roofing, or safety.";
    }

    // =======================
    // Scroll Reveal
    // =======================
    window.addEventListener("scroll", reveal);

    function reveal() {
        let elements = document.querySelectorAll(".reveal");
        for (let i = 0; i < elements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = elements[i].getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                elements[i].classList.add("active");
            }
        }
    }

    // =======================
    // Mobile Menu Toggle
    // =======================
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});
