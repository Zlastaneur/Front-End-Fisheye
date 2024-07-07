class MediaCard{
    constructor(media){
        this._media = media
    }

    createMediaCard(){
        const cardWrapper = document.createElement("figure")
        cardWrapper.classList.add("mediaCard")
        
        const mediaCard = 
        `
            ${this._media.image 
            ? `<img class="media_${this._media.id}" src="assets/photographers/${this._media.photographerId}/${this._media.image}" alt=""></img>`
            : `<video class="media_${this._media.id}" src="assets/photographers/${this._media.photographerId}/${this._media.video}" alt=""></video>`}
            
            <figcaption>
                <p class="title"> ${this._media.title}</p>
                <p class="likes">${this._media.likes} <i class="fa-solid fa-heart"></i></p>
            </figcaption>
        `
        cardWrapper.innerHTML = mediaCard
        return cardWrapper
    }
}