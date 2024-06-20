function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
/*
async function insertPhotographerName(){
    const test = document.querySelector(".photographerName")

    const response = await fetch("./photographers.json")
    const photographer = await response.json()

}
*/

