class Panel{
    constructor(photographer, media){
        // Initialize with photographer and media data
        this._photographer = photographer
        this._media = media

        // Create the panel wrapper element and store it
        this._panelWrapper = this.createPanel()
    }

    createPanel(){
        const panelWrapper = document.createElement("div")
        panelWrapper.classList.add("infoPanel_content")

        // Calculate total likes of all media
        let totalLikes = this.calculateTotalLikes()

        const panel = 
        `
            <p class="likes">${totalLikes} <i class="fa-solid fa-heart"></i></p>
            <p class="price">${this._photographer.price}€ / jour</p>
        `

        panelWrapper.innerHTML = panel

        
        return panelWrapper
    }

    updateTotalLikes() {
        // Find the element displaying total likes
        const totalLikesElement =  this._panelWrapper.querySelector(".likes")

        let totalLikes = this.calculateTotalLikes()

        // Update the text content of the total likes element
        totalLikesElement.textContent = `${totalLikes} `
    }

    calculateTotalLikes() {
        return this._media.reduce((prev, cur) => prev + cur.likes, 0)
    }
}