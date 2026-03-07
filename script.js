document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.querySelector(".chat-input-area button");
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");

    function askBot() {
        const text = inputField.value.toLowerCase().trim();
        if (text === "") return;

        // Display User Message
        display.innerHTML += `<p><b>You:</b> ${text}</p>`;

        // Default Reply
        let reply = "I'm not sure. Try asking about 'certifications', 'skills', or 'education'.";

        // Logic for specific questions based on your background
        if (text.includes("certifications") || text.includes("ccna") || text.includes("certified")) {
            reply = "Otito is a Cisco Certified Network Associate (CCNA).";
        } 
        else if (text.includes("education") || text.includes("college") || text.includes("university")) {
            reply = "Otito is currently pursuing a Bachelor of Science in Computer Technology at Bowie State University (Expected 2026).";
        } 
        else if (text.includes("skills") || text.includes("what can you do")) {
            reply = "Otito is skilled in Java, Python, Linux, Network Security, and Creative Problem Solving.";
        } 
        else if (text.includes("work") || text.includes("experience") || text.includes("technician")) {
            reply = "Otito has been an IT Technician for the Watchman Catholic Charismatic Renewal Movement since 2021.";
        }
        else if (text.includes("resume")) {
            reply = "You can download Otito's full resume in the Resume section of this page!";
        }

        // Display Bot Reply
        display.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
        
        // Clear input and auto-scroll to bottom
        inputField.value = "";
        display.scrollTop = display.scrollHeight;
    }

    // CLICK LISTENER: Works when clicking 'Send'
    sendBtn.onclick = askBot;

    // KEYPRESS LISTENER: Works when pressing 'Enter'
    inputField.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            askBot();
        }
    });
});
