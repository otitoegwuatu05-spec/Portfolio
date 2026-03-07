document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.querySelector(".chat-input-area button");
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("chat-display");

    function askBot() {
        const text = inputField.value.toLowerCase().trim();
        if (text === "") return;

        display.innerHTML += `<p><b>You:</b> ${text}</p>`;

        let reply = "I'm not sure about that. Try asking about Otito's 'skills', 'CCNA', 'education', or 'projects'.";

        // EDUCATION & GPA
        if (text.includes("education") || text.includes("college") || text.includes("university") || text.includes("school") || text.includes("gpa")) {
            reply = "Otito is a Computer Technology student at Bowie State University with a 3.1 GPA.";
        } 
        // CERTIFICATIONS
        else if (text.includes("certifications") || text.includes("ccna") || text.includes("certified")) {
            reply = "Otito is a Cisco Certified Network Associate (CCNA), demonstrating a strong foundation in networking.";
        } 
        // TECHNICAL SKILLS
        else if (text.includes("technical skills") || text.includes("programming") || text.includes("languages")) {
            reply = "Otito is proficient in Python, Java, and Linux, as well as PC Architecture and Database Management.";
        }
        // NETWORKING & SECURITY
        else if (text.includes("network") || text.includes("security")) {
            reply = "Otito has a strong foundation in Network Security and System Management.";
        }
        // PROJECTS
        else if (text.includes("project") || text.includes("sniffer") || text.includes("github")) {
            reply = "Otito's featured project is the 'Copilot Packet Sniffer,' a tool for monitoring and auditing network data packets.";
        }
        // WORK EXPERIENCE
        else if (text.includes("work") || text.includes("experience") || text.includes("job") || text.includes("technician")) {
            reply = "Since 2021, Otito has served as an IT Technician for the Watchman Catholic Charismatic Renewal Movement.";
        }
        // SOFT SKILLS
        else if (text.includes("soft skills") || text.includes("professional skills") || text.includes("lead")) {
            reply = "Otito excels in Creative Problem Solving, Team Building, Communication, and Lead Development.";
        }
        // RESUME / CONTACT
        else if (text.includes("resume") || text.includes("download") || text.includes("contact") || text.includes("email")) {
            reply = "You can download the full resume (Otito_Resume.pdf) in the Resume section or contact Otito at otitoegwuatu05@gmail.com.";
        }

        display.innerHTML += `<p>
