class ProfileHeader{
    constructor(photographer){
        this._photographer = photographer
    }

    createProfileHeader(){
        const headerWrapper = document.createElement("div")
        const headerContent = 
        `
            <div class="profile_info">
                <h1 class="name">${this._photographer.name}</h1>
                <p class="localisation"> ${this._photographer.city}, ${this._photographer.country}</p>
                <p class="tagline">${this._photographer.tagline}</p>
            </div>
            <div class="profile_btn"><button class="contactBtn btn" onclick="displayModal()">Contactez-moi</button></div>
            <div class="profile_picture"><img src="assets/photographers/${this._photographer.portrait}" class="picture" alt=""></div>
        `
        headerWrapper.classList.add("wrapper")
        headerWrapper.innerHTML = headerContent
        return headerWrapper
    }
}