// Function to display an image related to the page's topic
function displayImage() {
    let imageContainer = document.getElementById("imageContainer");
    let image = document.createElement("img");
    image.src = "./assets/pizza-slice.png"; // Replace "image.jpg" with the path to your image
    image.alt = "Pizza Slice";
    imageContainer.appendChild(image);
}

// Function to prompt the user with a relevant question for a number
function askForNumber() {
    return parseInt(prompt("HOW MANY SLICES OF PIZZA DO YOU WANT?"));
}

// Function to repeat the image based on the user's input
function repeatImage(numTimes) {
    for (let i = 0; i < numTimes; i++) {
        displayImage();
    }
}

// Call the functions in sequence
let numberOfRepeats = askForNumber();
if (!isNaN(numberOfRepeats)) {
    repeatImage(numberOfRepeats);
} else {
    alert("Please enter a valid number.");
}
