function validateForm() {

// Validation of the Name field
    let contactName = document.forms["contactForm"]["fname"].value;
    if (contactName == "") {
        alert("Name must be filled out!");
        return false;
    } else if (contactName == "Ironhack") {
        alert("Your name can't be Ironhack!");
        return false;
    }

// Validation of the Textarea
    let textArea = document.forms["contactForm"]["message"].value;
    if (textArea == "") {
        alert("Please enter a message.");
        return false;
    }
}