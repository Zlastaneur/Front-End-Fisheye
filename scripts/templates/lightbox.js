class Lightbox{
    constructor(photographerById, allMedia){
        this._photographerData = photographerById
        this._mediaList = allMedia
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
            for (let i = 0; i < this._mediaList.length; i++) {
                const lightbox = new LightboxScript(
                    this._mediaList[i],
                    this._mediaList
                )
                lightbox.displayLightbox(this._mediaList[i])
                lightbox.hideLightbox()
                lightbox.nextMedia()
                lightbox.previousMedia()
            }
        }, 25);
        return lightboxWrapper
    }
}