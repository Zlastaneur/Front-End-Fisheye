class Lightbox{
    constructor(allMedia){
        this._mediaList = allMedia
        this._currentIndex = 0
    }

    createLightbox(){
        const lightboxWrapper = document.createElement("div")
        lightboxWrapper.setAttribute("id", "lightbox_modal")
        lightboxWrapper.setAttribute("role", "dialog")
        lightboxWrapper.setAttribute("aria-modal", "true")
        lightboxWrapper.setAttribute("aria-label", "image closeup view")
        lightboxWrapper.setAttribute("aria-labelledby", "lightbox_title")

        const lightboxContent = 
        `<button tabindex="0" type="button" class="closeBtn" aria-label="Fermer la lightbox">
            <i aria-hidden="true" class="fas fa-times" ></i>
        </button>

        <button tabindex="0" type="button" class="previousBtn" aria-label="Photo précédente">
           <i class="fas fa-chevron-left"></i>
        </button>

        <button tabindex="0" type="button" class="nextBtn" aria-label="Photo suivante">
           <i aria-hidden="true" class="fas fa-chevron-right"></i>
        </button>
        
        <div id="lightbox_modal_content" role="document" aria-labelledby="lightbox_title" aria-label="Contenu de la lightbox" tabindex="0"></div>`

        lightboxWrapper.innerHTML = lightboxContent
        return lightboxWrapper
    }
}
