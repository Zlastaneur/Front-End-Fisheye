
//Get all the inputs
const form = document.querySelector("form")
const submitBtn = document.querySelector(".sendBtn")
let firstName = document.getElementById("firstname")
let lastName = document.getElementById("lastname")
let email = document.getElementById("email")
let message = document.getElementById("message")

function displayFormModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeFormModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Checking if submit btn is clicked
submitBtn.addEventListener("click", validate)

// Validate or not the form
function validate(e){
    e.preventDefault()
    
    if (firstNameValidation() && lastNameValidation() && emailValidation() && messageValidation()){
        console.log(`Prénom : ${firstName.value} | Nom : ${lastName.value} | Message : ${message.value}`)
        resetForm()

    } else {
        firstNameValidation(),
        lastNameValidation(),
        emailValidation(),
        messageValidation()
    }
}

/******* ↓↓ Listen and check the inputs ↓↓ *******/
firstName.addEventListener("input", firstNameValidation)
function firstNameValidation(){
    if (firstName.value.length >= 2) {
        cleanError(firstName)
        return true
    } else {
        showError(firstName)
        return false
    }
}

lastName.addEventListener("input", lastNameValidation)
function lastNameValidation(){
    if (lastName.value.length >= 2) {
        cleanError(lastName)
        return true
    } else {
        showError(lastName)
        return false
    }
}

email.addEventListener("input", emailValidation)
function emailValidation(){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    if (emailRegExp.test(email.value)){
        cleanError(email)
        return true
    } else {
        showError(email)
        return false
    }
}

message.addEventListener("input", messageValidation)
function messageValidation(){
    if (message.value.length >= 3) {
        cleanError(message)
        return true
    } else {
        showError(message)
        return false
    }
}
/*********** ↑↑ Listen and check the inputs ↑↑ ***********/

// Get position of the error and displays it
function showError(element){
    let parentFormData = element.parentElement
    let errorMessage = ""

    switch (element.id) {
        case "firstname": { errorMessage = "Le prénom doit contenir au moins 2 caractères"
        break } 
        case "lastname": { errorMessage = "Le nom doit contenir au moins 2 caractères"
        break }
        case "email" :  { errorMessage = "Merci d'insérer un email valide"
        break }
        case "message" :  { errorMessage = "Votre message doit contenir au moins 3 caractères"
        break }
        default : { console.log("Erreur dans l'instruction switch")
        }
    }
    parentFormData.setAttribute("data-error-visible", "true")
    parentFormData.setAttribute("data-error", errorMessage) 
}

// Clean error when there is no more
function cleanError(e){
    let parentFormData = e.parentElement

    parentFormData.setAttribute("data-error-visible", "false")
    parentFormData.setAttribute("data-error", "") 
}

// Reset form at the end
function resetForm(){
    form.reset()
    closeFormModal()
}