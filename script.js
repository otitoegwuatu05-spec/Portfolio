function askBot() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");
    const text = inputField.value.toLowerCase();
    let reply = "I'm not sure. Try asking about 'skills' or 'resume'.";

    if (text.includes("skills")) {
        reply = "I know HTML, CSS, JavaScript, and GitHub!";
    } else if (text.includes("experience")) {
        reply = "I have worked on several web projects you can see in the Projects section.";
    } else if (text.includes("projects")) {
        reply = "My top project is this portfolio! Check my GitHub for more.";
    }

    display.innerHTML += `<p><b>You:</b> ${text}</p>`;
    display.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
    inputField.value = ""; // Clear input
    display.scrollTop = display.scrollHeight; // Scroll to bottom
}
