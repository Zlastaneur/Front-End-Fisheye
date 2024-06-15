class MediaCard{
    constructor(media){
        this._media = media
    }

    createMediaCard(){
        const cardWrapper = document.createElement("figure")
        cardWrapper.classList.add("mediaCard")
        
        const mediaCard = 
        `
            ${this._media.image ? `<img src="assets/photographers/${this._media.photographerId}/${this._media.image}" alt=""></img>`
            : `<video src="assets/photographers/${this._media.photographerId}/${this._media.video}" alt=""></video>`}
            
            <figcaption>
                <p class="title"> ${this._media.title}</p>
                <p class="likes">${this._media.likes}</p>
            </figcaption>
        `

        cardWrapper.innerHTML = mediaCard
        return cardWrapper
    }
}