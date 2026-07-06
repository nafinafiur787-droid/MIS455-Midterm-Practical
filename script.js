// JavaScript logic for MIS 455 Midterm Practical Exam

function submitForm() {
    // Grab the name input value from the form
    const nameInput = document.getElementById('userName').value;
    
    // Check if the input field is empty
    if (nameInput.trim() === "") {
        alert("Please fill out the form fields before trying to submit!");
    } else {
        // Display custom validation alert back to the user
        alert("Thank you, " + nameInput + "! Your inquiry message has been securely transmitted to our engineering team.");
    }
}

console.log("NextGen Tech script initialized successfully.");