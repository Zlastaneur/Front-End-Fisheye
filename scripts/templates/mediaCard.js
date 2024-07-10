class MediaCard{
    constructor(media, index, mediaList){
        this._media = media
        this._index = index
        this._mediaList = mediaList
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


        const mediaElement = cardWrapper.querySelector(`.media_${this._media.id}`)
        mediaElement.addEventListener('click', () => {
            const lightboxScript = new LightboxScript(this._mediaList)
            lightboxScript.displayLightbox(this._index)
        })

        return cardWrapper
    }
}