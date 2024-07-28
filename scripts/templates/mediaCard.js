class MediaCard{
    constructor(media, index, mediaList, photographer){
        // Initialize with provided data
        this._media = media
        this._index = index
        this._mediaList = mediaList
        this._photographer = photographer
    }

    createMediaCard(){
        const cardWrapper = document.createElement("figure")
        cardWrapper.classList.add("mediaCard")
        
        // Construct media card content if it's an image or video
        const mediaCard = 
        `
            ${this._media.image 
            ? `<img aria-label="${this._media.title}, closeup view" class="media_${this._media.id}" src="assets/photographers/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}"></img>`
            : `<video aria-label="${this._media.title}, closeup view" class="media_${this._media.id}" src="assets/photographers/${this._media.photographerId}/${this._media.video}" alt="${this._media.title}"></video>`}
            
            <figcaption>
                <p class="title"> ${this._media.title}</p>
                ${this._media.isLiked 
                ? `<p tabindex="0" aria-label="${this._media.likes} likes" class="likes liked">${this._media.likes} <i class="fa-solid fa-heart"></i></p>`
                : `<p tabindex="0" aria-label="${this._media.likes} likes" class="likes">${this._media.likes} <i class="fa-regular fa-heart"></i></p>`}
            </figcaption>
        `
        cardWrapper.innerHTML = mediaCard


        const mediaElement = cardWrapper.querySelector(`.media_${this._media.id}`)
        mediaElement.tabIndex = 0 // Make the element focusable for keyboard navigation
        
        // Function to handle the display of the lightbox when clicking on the image/video
        const displayLightbox = () => {
            const lightboxScript = new LightboxScript(this._mediaList)
            lightboxScript.displayLightbox(this._index)
        }
        
        // Event listeners for click and key press to open the lightbox
        mediaElement.addEventListener('click', displayLightbox)
        mediaElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                displayLightbox()
            }
        })

        // Handling likes
        this._likeElement = cardWrapper.querySelector(".likes")
        this._likeElement.tabIndex = 0 // Make the element focusable for keyboard navigation
        this._likes = new Likes(this._media, this._likeElement)
       
        // Function to handle the like toggle
        const toggleLike = () => {
            this._likes.toggleLike(this._photographer, this._mediaList);
        }

        // Event listeners for click and key press to toggle the like
        this._likeElement.addEventListener('click', toggleLike)
        this._likeElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                toggleLike()
            }
        })
 
        return cardWrapper
    }
}