async function getPhotographersById() {
    const response = await fetch("../../data/photographers.json")
    const data = await response.json()
    console.log(data)
    
    let id = new URL(window.location.href).searchParams.get("id");
    console.log(id)

    const reponse = data.photographers.find((f) => f.id == id)
    console.log(reponse)
    injectHtml(reponse)
    return reponse
} 

const object = getPhotographersById()
console.log(object)
console.log(getPhotographersById())
getPhotographersById()
injectHtml()

function injectHtml(object){
    console.log(object)
    
    const banner = document.querySelector(".photograph-header")
    banner.insertAdjacentHTML("afterbegin", `
        <h1 class="name"></h1>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        
        
    `)
}