// Function to display an image related to the page's topic
function displayImage() {
    let imageContainer = document.getElementById("imageContainer");
    let image = document.createElement("img");
    image.src = "./assets/pizza-slice.png"; // Replace "image.jpg" with the path to your image
    image.alt = "Pizza Slice";
    imageContainer.appendChild(image);
}

// Function to prompt the user with a relevant question for a number
function askForNumber(question) {
    return parseInt(prompt(question));
}

// Function to repeat the image based on the user's input
function repeatImage(numTimes) {
    for (let i = 0; i < numTimes; i++) {
        displayImage();
    }
}

// Function to handle adding more slices
function addMoreSlices() {
    let additionalSlices = askForNumber("How many more slices would you like?");
    if (!isNaN(additionalSlices)) {
        repeatImage(additionalSlices);
    } else {
        alert("Please enter a valid number.");
    }
}

// Call the functions to initially display the image
let initialSlices = askForNumber("How many slices do you want?");
if (!isNaN(initialSlices)) {
    repeatImage(initialSlices);
} else {
    alert("Please enter a valid number.");
}