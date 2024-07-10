class Lightbox{
    constructor(allMedia){
        this._mediaList = allMedia
        this._currentIndex = 0
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
        return lightboxWrapper
    }
}
