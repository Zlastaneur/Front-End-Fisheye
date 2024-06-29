class LightboxScript{
    constructor(allMedia, mediaPhotographer){
        this._lightbox = document.querySelector("#lightbox")
        this._lightboxContent = document.querySelector("#lightbox_modal_content")
        this._media = document.querySelector(`.media_${allMedia.id}`)
        this._closeBtn = document.querySelector(".closeBtn")
    }

    displayLightbox(mediaPhotographer) {
        this._media.addEventListener("click", () => {
            this._lightbox.style.display = "block"
            this._lightboxContent.innerHTML = 
            `
                ${
                    mediaPhotographer.image
                    ? `<img alt="${mediaPhotographer.title}" src="../assets/photographers/${mediaPhotographer.photographerId}/${mediaPhotographer.image}">`
                    : `<video title="${mediaPhotographer.title}" src="../assets/photographers/${mediaPhotographer.photographerId}/${mediaPhotographer.video}" controls></video>`
                }
                <p class="title"> ${mediaPhotographer.title}</p>
            `
       })
    }
    
    hideLightbox() {
            this._closeBtn.addEventListener("click", () => {
            this._lightbox.style.display = "none"
        })

        const onClickOutside = (element, callback) => {
            document.addEventListener('click', e => {
              if (!element.contains(e.target)) callback();
            });
          };

          onClickOutside('#lightbox_modal', () => console.log('Hello'));
    }

    
      
      

}