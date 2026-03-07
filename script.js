function askBot() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");
    const text = inputField.value.toLowerCase().trim();
    
    if (text === "") return;

    display.innerHTML += `<p><b>You:</b> ${text}</p>`;

    let reply = "I'm not sure. Try asking about my 'GPA', 'CCNA', or 'skills'.";

    // Broadened logic to catch more questions
    if (text.includes("gpa") || text.includes("grade") || text.includes("3.1")) {
        reply = "Otito has a 3.1 GPA at Bowie State University.";
    } else if (text.includes("ccna") || text.includes("cert")) {
        reply = "Otito is Cisco CCNA Certified.";
    } else if (text.includes("work") || text.includes("experience") || text.includes("technician")) {
        reply = "Otito has been an IT Technician since 2021.";
    } else if (text.includes("skill") || text.includes("python") || text.includes("java")) {
        reply = "Otito is proficient in Python, Java, Linux, and Network Security.";
    }

    display.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
    inputField.value = ""; 
    display.scrollTop = display.scrollHeight;
}

// FIX: This makes the "Enter" key work!
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        askBot();
    }
});
