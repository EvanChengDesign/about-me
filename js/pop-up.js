//Declare a variable called "Hello"
//Assign it the value of whatever "prompt"
//Prompt will pop up a window and ask a question

    let hello = prompt("Hello, what is your name?");
    let uppercaseName = hello.toUpperCase(); // Convert the name to uppercase
    let sentence = "<p class='welcome-message'>WELCOME TO MY PAGE " + uppercaseName + "! HAVE A GREAT DAY!</p>";
    document.write(sentence);

   