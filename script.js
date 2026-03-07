function askBot() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");
    const text = inputField.value.toLowerCase().trim();
    
    if (text === "") return;

    display.innerHTML += `<p><strong>You:</strong> ${text}</p>`;

    let reply = "I'm not sure. Try asking about 'skills', 'CCNA', or 'projects'.";

    if (text.includes("skills")) {
        reply = "Otito is skilled in Java, Python, Linux, and Network Security.";
    } else if (text.includes("ccna")) {
        reply = "Otito is a Cisco Certified Network Associate (CCNA).";
    } else if (text.includes("project")) {
        reply = "You can see the Copilot Packet Sniffer in my Projects section!";
    } else if (text.includes("it technician") || text.includes("work")) {
        reply = "Otito has been an IT Technician for the Watchman Catholic Charismatic Renewal Movement since 2021.";
    }

    display.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
    inputField.value = "";
    display.scrollTop = display.scrollHeight;
}
