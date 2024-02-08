// Help Prompt
function askForHelp() {
    let needHelp = confirm("Do you need help?");
    let helpMessage = document.getElementById("helpMessage");

    if (needHelp) {
        helpMessage.innerHTML = "<p class='assist-message'>We're here to assist you!</p>";
    } else {
        helpMessage.innerHTML = "<p class='alright-message'>Alright, feel free to reach out if you change your mind.</p>";
    }
}

