function toggleChat() {
    const chatContainer = document.getElementById("chatbot-container");
    // Toggles the 'chat-hidden' class to expand or shrink
    chatContainer.classList.toggle("chat-hidden");
}

function sendChip(value) {
    document.getElementById("user-input").value = value;
    askBot();
}

function askBot() {
    const inputField = document.getElementById("user-input");
    const history = document.getElementById("chat-history");
    const chatWindow = document.getElementById("chat-window");
    const text = inputField.value.trim();

    if (text === "") return;

    // Display User Bubble
    history.innerHTML += `<div class="user-msg"><b>You:</b> ${text}</div>`;

    let reply = "I'm not sure. Try asking about my 'projects', 'GPA', or 'CCNA'.";
    let lowText = text.toLowerCase();

    // Otito's specific info
    if (lowText.includes("skills")) reply = "Otito is proficient in Python, Java, Linux, and Network Security.";
    else if (lowText.includes("project")) reply = "Otito developed a Packet Sniffer and this Professional Portfolio!";
    else if (lowText.includes("gpa")) reply = "Otito has a 3.1 GPA at Bowie State University.";
    else if (lowText.includes("ccna")) reply = "Otito is Cisco CCNA Certified.";
    else if (lowText.includes("experience") || lowText.includes("work")) reply = "Otito has been an IT Technician since 2021.";
    else if (lowText.includes("contact")) reply = "You can reach Otito at otitoegwuatu05@gmail.com.";

    setTimeout(() => {
        history.innerHTML += `<div class="bot-msg"><b>Otito:</b> ${reply}</div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 400);

    inputField.value = "";
}
