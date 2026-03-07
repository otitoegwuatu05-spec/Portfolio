// This makes sure the button works as soon as the page loads
document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.querySelector(".chat-input-area button");
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");

    function askBot() {
        const text = inputField.value.toLowerCase().trim();
        if (text === "") return;

        display.innerHTML += `<p><b>You:</b> ${text}</p>`;

        let reply = "I'm not sure. Try asking about 'skills', 'CCNA', or 'education'.";

        if (text.includes("skills")) {
            reply = "Otito is skilled in Java, Python, Linux, and Network Security.";
        } else if (text.includes("ccna")) {
            reply = "Otito is a Cisco Certified Network Associate (CCNA).";
        } else if (text.includes("education")) {
            reply = "Otito is a Computer Technology student at Bowie State University.";
        } else if (text.includes("work") || text.includes("it technician")) {
            reply = "Otito has been an IT Technician for Watchman Catholic Charismatic Renewal Movement since 2021.";
        }

        display.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
        inputField.value = "";
        display.scrollTop = display.scrollHeight;
    }

    // This connects the 'Send' button to the function
    sendBtn.onclick = askBot;

    // This allows you to press 'Enter' to send a message
    inputField.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            askBot();
        }
    });
});
