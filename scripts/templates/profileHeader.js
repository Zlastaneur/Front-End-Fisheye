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
            <div class="btn"><button class="contact_button" onclick="displayModal()">Contactez-moi</button></div>
            <div class="profile_picture"><img src="assets/photographers/${this._photographer.portrait}" class="picture" alt=""></div>
        `
        headerWrapper.classList.add("wrapper")
        headerWrapper.innerHTML = headerContent
        return headerWrapper
    }
}

/*
class ProfileHeader{
    constructor(photographer){
        this._photographer = photographer
    }

    createFirstPart(){
        const wrapper = document.createElement("div")
        const content = 
        `
            <h1>${this._photographer.name}</h1>
            <p class="localisation"> ${this._photographer.city}, ${this._photographer.country}</p>
            <p class="tagline">${this._photographer.tagline}</p>
        `
        wrapper.innerHTML = content
        return wrapper
    }

    createSecondPart(){
        const wrapper = document.createElement("div")
        const content = 
        `
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        `
        wrapper.innerHTML = content
        return wrapper
    }

    createThirdPart(){
        const wrapper = document.createElement("div")
        const content = 
        `
        <img src="assets/photographers/${this._photographer.portrait}" alt="">
        `
        wrapper.innerHTML = content
        return wrapper
    }

}*/