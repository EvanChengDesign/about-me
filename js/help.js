// Help Prompt
function askForHelp() {
    let needHelp = confirm("Do you need help?");
    let helpMessage = document.getElementById("helpMessage");

    if (needHelp) {
        helpMessage.textContent = "We're here to assist you!";
    } else {
        helpMessage.textContent = "Alright, feel free to reach out if you change your mind.";
    }
}