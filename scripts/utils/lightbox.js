class LightboxScript{
    constructor(mediaList){
        this._mediaList = mediaList

        this._lightbox = document.querySelector("#lightbox")
        this._lightboxContent = document.querySelector("#lightbox_modal_content")
        this._closeBtn = document.querySelector(".closeBtn")
        this._nextBtn = document.querySelector(".nextBtn")
        this._previousBtn = document.querySelector(".previousBtn")

        this._closeBtn.addEventListener("click", this.hideLightbox.bind(this))
        this._nextBtn.addEventListener("click", this.nextMedia.bind(this))
        this._previousBtn.addEventListener("click", this.previousMedia.bind(this))

        this._currentIndex = 0
    }

    displayLightbox(index) {
        this._currentIndex = index
        this._lightbox.style.display = "block"
        this.displayMedia(this._currentIndex)
    }

    displayMedia(index) {
        const media = this._mediaList[index]
        this._lightboxContent.innerHTML = `
            ${
                media.image
                ? `<img alt="${media.title}" src="assets/photographers/${media.photographerId}/${media.image}">`
                : `<video title="${media.title}" src="assets/photographers/${media.photographerId}/${media.video}" controls></video>`
            }
            <p class="title">${media.title}</p>
        `
    }
    
    hideLightbox() {
        this._lightbox.style.display = "none"
    }

    nextMedia() {
        this._currentIndex = (this._currentIndex + 1) % this._mediaList.length
        this.displayMedia(this._currentIndex)
    }

    previousMedia() {
        this._currentIndex = (this._currentIndex - 1 + this._mediaList.length) % this._mediaList.length
        this.displayMedia(this._currentIndex)
    }
}