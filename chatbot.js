function askBot() {
    const inputField = document.getElementById("user-input");
    // FIXED: Changed "chat-display" to "chat-window" to match your HTML
    const display = document.getElementById("chat-window"); 
    
    if (!inputField || !display) {
        console.error("Chatbot elements not found!");
        return;
    }

    const text = inputField.value.toLowerCase().trim();
    if (text === "") return;

    display.innerHTML += `<p><b>You:</b> ${text}</p>`;

    let reply = "I'm not sure. Try asking about my 'projects', 'GPA', or 'CCNA'.";

    if (text.includes("name") || text.includes("who are you")) {
        reply = "His name is Otito Egwuatu, a Computer Technology professional and networking specialist.";
    } else if (text.includes("project") || text.includes("done") || text.includes("sniffer")) {
        reply = "Otito has developed a Copilot Packet Sniffer for network auditing and this Professional Portfolio website.";
    } else if (text.includes("classification") || text.includes("senior") || text.includes("year") || text.includes("bowie")) {
        reply = "Otito is currently a Senior at Bowie State University, majoring in Computer Technology.";
    } else if (text.includes("gpa") || text.includes("grade") || text.includes("3.1")) {
        reply = "Otito has a 3.1 GPA at Bowie State University.";
    } else if (text.includes("ccna") || text.includes("cert")) {
        reply = "Otito is Cisco CCNA Certified.";
    } else if (text.includes("work") || text.includes("experience") || text.includes("technician")) {
        reply = "Otito has been an IT Technician since 2021.";
    } else if (text.includes("skills") || text.includes("python") || text.includes("java")) {
        reply = "Otito is proficient in Python, Java, Linux, and Network Security.";
    }
// CHANGED: "Bot" is now "Otito"
    display.innerHTML += `<p><b>Otito:</b> ${reply}</p>`;
    
    inputField.value = ""; 
    display.scrollTop = display.scrollHeight;
}
