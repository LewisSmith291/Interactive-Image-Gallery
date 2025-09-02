
const inputField = document.getElementById("image-input")
const validExtentions = [".png", ".jpeg", ".jpg", ".gif"];

function addImage(){
    event.preventDefault();

    // Input Validation
    // If empty input
    if (inputField.value == "") return;
    // If url doesn't exist
    if (!checkURLExists(inputField.value)) return;
    // if URL isn't image
    if (!checkExtention(inputField.value)) return;

    
}

// Checks that the file is an image
function checkExtention(src){
    let isValid = false;
    validExtentions.forEach(element => {
        if (src.endsWith(element)) isValid = true;
    });
    return isValid;
}

// Checks that the file exists in the directory
function checkURLExists(src){
    let request = new XMLHttpRequest();

    // Initialise and send HTTPS request
    request.open('HEAD', src, false);
    request.send();
    // If request cant find resource, return false, otherwise return true
    return request.status != 404;
}