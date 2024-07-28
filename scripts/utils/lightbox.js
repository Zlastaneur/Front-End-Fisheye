class LightboxScript{
    constructor(mediaList){
        // Initialize with provided data
        this._mediaList = mediaList

        // DOM elements
        this._lightbox = document.querySelector("#lightbox")
        this._lightboxContent = document.querySelector("#lightbox_modal_content")
        this._closeBtn = document.querySelector(".closeBtn")
        this._nextBtn = document.querySelector(".nextBtn")
        this._previousBtn = document.querySelector(".previousBtn")
        this._headerDOM = document.querySelector("header")
        this._mainDOM = document.querySelector("#main")
        

        // Event listeners
        this._closeBtn.addEventListener("click", this.hideLightbox.bind(this))
        this._nextBtn.addEventListener("click", this.nextMedia.bind(this))
        this._previousBtn.addEventListener("click", this.previousMedia.bind(this))
        document.addEventListener("keydown", this.handleKeydown.bind(this))

        this._currentIndex = 0
    }

    // Display lightbox with media at given index
    displayLightbox(index) {
        this._currentIndex = index
        this._lightbox.style.display = "block"
        this.displayMedia(this._currentIndex)

        this._headerDOM.toggleAttribute("inert")
        this._mainDOM.toggleAttribute("inert")
    }

    // Display media content in lightbox
    displayMedia(index) {
        const media = this._mediaList[index]
        this._lightboxContent.innerHTML = `
            ${
                media.image
                ? `<img alt="${media.title}" src="assets/photographers/${media.photographerId}/${media.image}">`
                : `<video title="${media.title}" src="assets/photographers/${media.photographerId}/${media.video}" controls></video>`
            }
            <p tabindex="0" class="title">${media.title}</p>
        `
    }
    
    hideLightbox() {
        this._lightbox.style.display = "none"

        this._headerDOM.removeAttribute("inert")
        this._mainDOM.removeAttribute("inert")
    }

    nextMedia() {
        this._currentIndex = (this._currentIndex + 1) % this._mediaList.length
        this.displayMedia(this._currentIndex)
    }

    previousMedia() {
        this._currentIndex = (this._currentIndex - 1 + this._mediaList.length) % this._mediaList.length
        this.displayMedia(this._currentIndex)
    }

    handleKeydown(event) {
        if (this._lightbox.style.display === "block") {
            switch (event.key) {
                case "ArrowLeft":
                    this.previousMedia()
                    break
                case "ArrowRight":
                    this.nextMedia()
                    break
                case "Escape":
                    this.hideLightbox()
                    break
            }
        }
    }
}