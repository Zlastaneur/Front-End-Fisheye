class Lightbox{
    constructor(photographerById, allMedia){
        this._photographer = photographerById
        this._medias = allMedia
    }

    createLightbox(){
        const lightboxWrapper = document.createElement("div")
        lightboxWrapper.setAttribute("id", "lightbox_modal")
        
        const lightboxContent = 
        `
                <button type="button" class="closeBtn" >
                    <i class="fas fa-times"></i>
                </button>
    
                <button type="button" class="previousBtn">
                    <i class="fas fa-chevron-left"></i>
                </button>
    
                <button type="button" class="nextBtn">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div id="lightbox_modal_content"></div>     
        `

        lightboxWrapper.innerHTML = lightboxContent

        setTimeout(() => {
            for (let i = 0; i < this._medias.length; i++) {
                const lightbox = new LightboxScript(
                    this._medias[i],
                    this._photographer
                )
                lightbox.displayLightbox(this._medias[i])
                lightbox.hideLightbox()
                /* lightbox.open / close / next / previous */
            }
        }, 25);
        return lightboxWrapper
    }
}