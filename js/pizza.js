// Function to validate a number input
function validateNumberInput(promptMessage) {
    let userInput;
    do {
        userInput = prompt(promptMessage);
        if (!userInput || isNaN(userInput)) {
            alert("Please enter a valid number.");
        }
    } while (!userInput || isNaN(userInput));
    return parseInt(userInput);
}

// Prompt the user for a relevant question
let numPizzaPieces = validateNumberInput("How many pieces of pizza could you eat? Enter a number:");

// Function to display the image
function displayImage(imageUrl, repeatTimes) {
    let imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear existing images
    for (let i = 0; i < repeatTimes; i++) {
        let imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.alt = "Pizza-slice.png";
        imageContainer.appendChild(imageElement);
    }
}

// Call the function to display the image multiple times
displayImage("./assets/pizza-slice.png", numPizzaPieces);
