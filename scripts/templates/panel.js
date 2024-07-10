class Panel{
    constructor(photographer, media){
        this._photographer = photographer
        this._media = media

        this._panelWrapper = this.createPanel()
    }

    createPanel(){
        const panelWrapper = document.createElement("div")
        panelWrapper.classList.add("infoPanel_content")

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
        const totalLikesElement =  this._panelWrapper.querySelector(".likes")
        let totalLikes = this.calculateTotalLikes()
        totalLikesElement.textContent = `${totalLikes} `
    }

    calculateTotalLikes() {
        return this._media.reduce((prev, cur) => prev + cur.likes, 0)
    }
}