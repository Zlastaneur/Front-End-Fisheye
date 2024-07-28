class ProfileHeader{
    constructor(photographer){
        this._photographer = photographer
    }

    createProfileHeader(){
        const headerWrapper = document.createElement("div")
        const headerContent = 
        `
            <div class="profile_info" role="region" tabindex="0">
                <h1 class="name" tabindex="0">${this._photographer.name}</h1>
                <p class="localisation" tabindex="0"> ${this._photographer.city}, ${this._photographer.country}</p>
                <p class="tagline" tabindex="0">${this._photographer.tagline}</p>
            </div>
            <div class="profile_btn"><button class="contactBtn btn" onclick="displayFormModal()" aria-label="Contacter ${this._photographer.name}" tabindex="0">Contactez-moi</button></div>
            <div class="profile_picture" tabindex="0"><img src="assets/photographers/${this._photographer.portrait}" class="picture" alt="Photo de profil de ${this._photographer.name}"></div>
        `
        headerWrapper.classList.add("wrapper")
        headerWrapper.innerHTML = headerContent
        
        return headerWrapper
    }
}