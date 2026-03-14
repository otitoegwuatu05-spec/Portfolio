// Function to handle the expanding/shrinking toggle
function toggleChat() {
    const chatContainer = document.getElementById("chatbot-container");
    chatContainer.classList.toggle("chat-hidden");
}

// Function to handle the "Suggested Chip" clicks
function sendChip(value) {
    document.getElementById("user-input").value = value;
    askBot();
}

function askBot() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-history"); // Use chat-history for the scrolling area
    const chatWin = document.getElementById("chat-window"); // Use chat-window for auto-scrolling
    
    if (!inputField || !display) {
        console.error("Chatbot elements not found!");
        return;
    }

    const text = inputField.value.trim();
    const lowText = text.toLowerCase();
    
    if (text === "") return;

    // Display User Message Bubble
    display.innerHTML += `<div class="user-msg"><b>You:</b> ${text}</div>`;

    // Default Bot Reply
    let reply = "I'm not sure. Try asking about my 'projects', 'GPA', or 'CCNA'.";

    // Bot Logic
    if (lowText.includes("name") || lowText.includes("who are you")) {
        reply = "His name is Otito Egwuatu, a Computer Technology professional and networking specialist.";
    } else if (lowText.includes("project") || lowText.includes("done") || lowText.includes("sniffer")) {
        reply = "Otito has developed a Copilot Packet Sniffer for network auditing and this Professional Portfolio website.";
    } else if (lowText.includes("classification") || lowText.includes("senior") || lowText.includes("year") || lowText.includes("bowie")) {
        reply = "Otito is currently a Senior at Bowie State University, majoring in Computer Technology.";
    } else if (lowText.includes("gpa") || lowText.includes("grade") || lowText.includes("3.1")) {
        reply = "Otito has a 3.1 GPA at Bowie State University.";
    } else if (lowText.includes("ccna") || lowText.includes("cert")) {
        reply = "Otito is Cisco CCNA Certified.";
    } else if (lowText.includes("work") || lowText.includes("experience") || lowText.includes("technician")) {
        reply = "Otito has over three years of experience as an IT Technician.";
    } else if (lowText.includes("skills") || lowText.includes("python") || lowText.includes("java")) {
        reply = "Otito is proficient in Python, Java, Linux, and Network Security.";
    } else if (lowText.includes("contact")) {
        reply = "You can reach Otito via the Contact page or email him at otitoegwuatu05@gmail.com.";
    }

    // Delay the bot reply slightly to feel more natural
    setTimeout(() => {
        display.innerHTML += `<div class="bot-msg"><b>Otito:</b> ${reply}</div>`;
        
        // Auto-scroll to the bottom of the window
        chatWin.scrollTop = chatWin.scrollHeight;
    }, 400);

    // Clear the input field
    inputField.value = ""; 
}
