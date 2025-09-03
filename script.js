const inputField = document.getElementById("image-input")
const validExtentions = [".png", ".jpeg", ".jpg", ".gif"];
const galleryDiv = document.getElementById("gallery");

function addImage(){
    event.preventDefault();

    // Input Validation
    // If empty input
    if (inputField.value == ""){
        alert("Input is empty");
        return;
    } 
    // If url doesn't exist
    if (!checkURLExists(inputField.value)){
        alert("Please enter a valid URL");
        return;
    }
    // if URL isn't image
    if (!checkExtention(inputField.value)){
        alert("Please input an image URL");
        return;
    }

    // New gallery element
    const newGalleryItem = document.createElement("div");
    // New image
    const newImage = document.createElement("img");
    newImage.src = inputField.value;

    
    newGalleryItem.appendChild(newImage);
    galleryDiv.appendChild(newGalleryItem);
}

function toggleList(){
    const urlList = document.getElementById("url-list");
    urlList.classList.toggle("url-list-hidden");

    const toggleListButton = document.getElementById("toggle");
    toggleListButton.classList.toggle("toggle-button-selected");
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