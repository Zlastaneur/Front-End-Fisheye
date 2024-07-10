class MediaCard{
    constructor(media, index, mediaList, photographer){
        this._media = media
        this._index = index
        this._mediaList = mediaList
        this._photographer = photographer
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
                <p class="likes ${this._media.isLiked ? 'liked' : ''}">${this._media.likes} <i class="fa-solid fa-heart"></i></p>
            </figcaption>
        `
        cardWrapper.innerHTML = mediaCard


        const mediaElement = cardWrapper.querySelector(`.media_${this._media.id}`)
        mediaElement.addEventListener('click', () => {
            const lightboxScript = new LightboxScript(this._mediaList)
            lightboxScript.displayLightbox(this._index)
        })

        this._likeElement = cardWrapper.querySelector(".likes")

        this._likes = new Likes(this._media, this._likeElement)
       
        
        this._likeElement.addEventListener('click', () => {
            this._likes.toggleLike(this._photographer, this._mediaList)
        })
 

        return cardWrapper
    }
}