class LightboxScript{
    constructor(mediaById, mediaList, photographerById){
        this._lightbox = document.querySelector("#lightbox")
        this._lightboxContent = document.querySelector("#lightbox_modal_content")
        this._mediaCard = document.querySelector(`.media_${mediaById.id}`)
        this._closeBtn = document.querySelector(".closeBtn")
        this._nextBtn = document.querySelector(".nextBtn")
        this._previousBtn = document.querySelector(".previousBtn")

        this._mediaList = mediaList
        this._currentIndex = 0
    }

    displayLightbox(media) {
        this._mediaCard.addEventListener("click", () => {
            this._lightbox.style.display = "block"
            this._lightboxContent.innerHTML = 
            `
                ${
                    media.image
                    ? `<img alt="${media.title}" src="../assets/photographers/${media.photographerId}/${media.image}">`
                    : `<video title="${media.title}" src="../assets/photographers/${media.photographerId}/${media.video}" controls></video>`
                }
                <p class="title">${media.title}</p>
            `
       })
    }
    
    hideLightbox() {
            this._closeBtn.addEventListener("click", () => {
            this._lightbox.style.display = "none"
        })

        /*const onClickOutside = (element, callback) => {
            document.addEventListener('click', e => {
              if (!element.contains(e.target)) callback();
            });
          };

          onClickOutside('#lightbox_modal', () => console.log('Hello'));*/
    }

    nextMedia() {
        this._nextBtn.addEventListener("click", (e) => {
        e.preventDefault()

        //let index = this._mediaList.findIndex(image => image == this._mediaCard)
        this._currentIndex = (this._currentIndex + 1) % this._mediaList.length;
        //const newMedia = this._mediaList.indexOf(this._mediaCard)
        const newMedia = this._mediaList[this._currentIndex]
        this._lightboxContent.innerHTML = 
            `
                ${
                    newMedia.image
                    ? `<img alt="${newMedia.title}" src="../assets/photographers/${newMedia.photographerId}/${newMedia.image}">`
                    : `<video title="${newMedia.title}" src="../assets/photographers/${newMedia.photographerId}/${newMedia.video}" controls></video>`
                }
                <p class="title">${newMedia.title}</p>
            `
        })
    }

    previousMedia() {
        this._previousBtn.addEventListener("click", (e) => {
        e.preventDefault()

        //const i = this._mediaList.findIndex(i => i = this._)
        this._currentIndex = (this._currentIndex - 1) % this._mediaList.length;
        if (this._currentIndex < 0) {
            this._currentIndex = this._mediaList.length - 1;
          }
        const newMedia = this._mediaList[this._currentIndex]
        this._lightboxContent.innerHTML = 
            `
                ${
                    newMedia.image
                    ? `<img alt="${newMedia.title}" src="../assets/photographers/${newMedia.photographerId}/${newMedia.image}">`
                    : `<video title="${newMedia.title}" src="../assets/photographers/${newMedia.photographerId}/${newMedia.video}" controls></video>`
                }
                <p class="title">${newMedia.title}</p>
            `
        })
    }
    
      
      

}