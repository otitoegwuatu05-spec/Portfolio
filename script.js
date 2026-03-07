function askBot() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");
    const text = inputField.value.toLowerCase().trim();
    
    if (text === "") return;

    // Display User Message
    display.innerHTML += `<p><b>You:</b> ${text}</p>`;

    // Default Reply
    let reply = "I'm not sure. Try asking about Otito's 'GPA', 'CCNA', or 'IT work'.";

    // RESPONSIVE LOGIC: Using keywords to catch more questions
    if (text.includes("gpa") || text.includes("grade") || text.includes("score")) {
        reply = "Otito has maintained a strong 3.1 GPA at Bowie State University.";
    } 
    else if (text.includes("ccna") || text.includes("cert") || text.includes("license")) {
        reply = "Otito is a Cisco Certified Network Associate (CCNA).";
    } 
    else if (text.includes("school") || text.includes("college") || text.includes("university") || text.includes("bowie")) {
        reply = "Otito is a Computer Technology student at Bowie State University.";
    } 
    else if (text.includes("skills") || text.includes("know") || text.includes("can he do")) {
        reply = "Otito is proficient in Python, Java, Linux, and Network Security.";
    } 
    else if (text.includes("work") || text.includes("job") || text.includes("technician")) {
        reply = "Otito has been an IT Technician for the Watchman Catholic Charismatic Renewal Movement since 2021.";
    }
    else if (text.includes("project") || text.includes("sniffer") || text.includes("github")) {
        reply = "You can see Otito's projects, like the Packet Sniffer, on his GitHub link in the Projects section.";
    }

    // Display Bot Reply
    display.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
    
    // Reset and Auto-scroll
    inputField.value = "";
    display.scrollTop = display.scrollHeight;
}

// THE ENTER KEY FIX: Makes it responsive without clicking 'Send'
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        askBot();
    }
});
