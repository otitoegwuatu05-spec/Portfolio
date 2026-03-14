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

// Function to handle the expanding/shrinking toggle
function toggleChat() {
    const chatContainer = document.getElementById("chatbot-container");
    chatContainer.classList.toggle("chat-hidden");
}

function sendChip(value) {
    document.getElementById("user-input").value = value;
    askBot();
}

// NEW: Listener for the "Enter" key
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            askBot();
        }
    });
});

function askBot() {
    const inputField = document.getElementById("user-input");
    const history = document.getElementById("chat-history");
    const chatWindow = document.getElementById("chat-window");
    const text = inputField.value.trim();

    if (text === "") return;

    // Show User Message
    history.innerHTML += `<div class="user-msg"><b>You:</b> ${text}</div>`;

    let reply = "I'm not sure about that. Try asking about my 'projects', 'GPA', or 'CCNA'!";
    let lowText = text.toLowerCase();

    // SMARTER LOGIC: Handles "name", "who are you", etc.
    if (lowText.includes("name") || lowText.includes("who are you")) {
        reply = "His name is Otito Egwuatu, a Computer Technology student and IT professional.";
    } else if (lowText.includes("project") || lowText.includes("done")) {
        reply = "Otito developed a Copilot Packet Sniffer and this Professional Portfolio website.";
    } else if (lowText.includes("gpa") || lowText.includes("grade")) {
        reply = "Otito has a 3.1 GPA at Bowie State University.";
    } else if (lowText.includes("ccna") || lowText.includes("cert")) {
        reply = "Otito is Cisco CCNA Certified.";
    } else if (lowText.includes("experience") || lowText.includes("work") || lowText.includes("job")) {
        reply = "Otito has over 3 years of experience as an IT Technician.";
    } else if (lowText.includes("skills") || lowText.includes("tech") || lowText.includes("code")) {
        reply = "Otito is proficient in Python, Java, Linux, and Network Security.";
    } else if (lowText.includes("hi") || lowText.includes("hello")) {
        reply = "Hi there! I'm Otito's assistant. How can I help you today?";
    }

    // Bot Reply with delay
    setTimeout(() => {
        history.innerHTML += `<div class="bot-msg"><b>Otito:</b> ${reply}</div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 400);

    inputField.value = "";
}
