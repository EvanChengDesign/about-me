let selectedOption = ""; 
// Variable to store the selected option

// Function to select the option and highlight the button
function selectOption(optionId) {
    const selectedButton = document.getElementById(optionId);
    
    // Toggle selection status of the option
    if (selectedOption === optionId) {
        // If the option is already selected, unselect it
        selectedButton.classList.remove("selected");
        selectedOption = ""; // Clear selected option
    } else {
        // Remove highlighting from previously selected button, if any
        if (selectedOption) {
            document.getElementById(selectedOption).classList.remove("selected");
        }
        // Highlight the selected button
        selectedButton.classList.add("selected");
        selectedOption = optionId; // Update the selected option
    }
}

// Function to submit the choice
function submitChoice() {
    if (selectedOption !== "") {
        let selectedButtonText = document.getElementById(selectedOption).textContent;
        document.getElementById("choice").textContent = "You chose " + selectedButtonText + ".";
        appendAnswer(selectedButtonText); // Append the selected answer to the list
    } else {
        alert("Please choose an option first.");
    }
}

// Function to append the chosen option to the list of answers
function appendAnswer(answer) {
    let answersList = document.getElementById("answersList");
    let listItem = document.createElement("li");
    listItem.textContent = answer;
    answersList.appendChild(listItem);
}
