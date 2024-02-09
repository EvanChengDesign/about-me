/*// Help Prompt
function askForHelp() {
    let needHelp = confirm("Do you need help?");
    let helpMessage = document.getElementById("helpMessage");

    if (needHelp) {
        helpMessage.innerHTML = "<p class='assist-message'>We're here to assist you!</p>";
    } else {
        helpMessage.innerHTML = "<p class='alright-message'>Alright, feel free to reach out if you change your mind.</p>";
    }
}
*/

function askForHelp() {
    let needHelp = confirm("Do you need help?");
    let helpMessage = document.getElementById("helpMessage");

    if (needHelp !== null) {
        if (needHelp) {
            helpMessage.innerHTML = "<p class='assist-message'>We're here to assist you!</p>";
        } else {
            helpMessage.innerHTML = "<p class='alright-message'>Alright, feel free to reach out if you change your mind.</p>";
        }
    } else {
        // Handle the case where the user cancels the confirmation
        helpMessage.innerHTML = "<p class='cancel-message'>You canceled the request for help.</p>";
    }
}
