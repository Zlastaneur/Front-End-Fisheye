class Panel{
    constructor(photographer, media){
        this._photographer = photographer
        this._media = media
    }

    createPanel(){
        const panelWrapper = document.createElement("div")
        let totalLikes = this._media.reduce(function(prev, cur){
            return prev + cur.likes
        }, 0)

        panelWrapper.classList.add("infoPanel_content")
        
        const panel = 
        `
            <p class="likes">${totalLikes} <i class="fa-solid fa-heart"></i></p>
            <p class="price">${this._photographer.price}€ / jour</p>
        `

        panelWrapper.innerHTML = panel
        return panelWrapper
    }
}