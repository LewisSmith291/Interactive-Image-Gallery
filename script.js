const inputField = document.getElementById("image-input")


function addImage(){
    event.preventDefault();
    console.log(inputField.value);

    inputField.value = "";
}