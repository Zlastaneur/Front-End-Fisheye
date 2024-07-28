class ProfilePage {
    constructor() {
        // Get photographer ID from URL
        const id = new URL(window.location.href).searchParams.get("id")
        this.id = parseInt(id)

        // Initialize API data object
        this.apiData = new ApiData("./photographers.json")

        // DOM elements
        this.headerSection = document.getElementById("photographer-header")
        this.filterSection = document.querySelector(".filter")
        this.mediaSection = document.getElementById("photographer-media")
        this.panelSection = document.querySelector(".infoPanel")
        this.lightboxSection = document.querySelector("#lightbox")
    }

    async main(){
        // Get Api data of the photographer
        const photographerById = await this.apiData.getPhotographerById(this.id)

        // Get all the media with photographer's id
        const allMedia = await this.apiData.getMediaById(this.id)

        // Create header template with photographer Data
        const headerTemplate = new ProfileHeader(photographerById)
        this.headerSection.append(headerTemplate.createProfileHeader())

        // Create filters
        const filterTemplate = new Filter(photographerById,allMedia)
        this.filterSection.append(filterTemplate.createFilter())

        // Create media cards for each media found with photographer's id (Now on filterScript)
       /* allMedia.forEach(media => {
            const mediaTemplate = new MediaCard(media)
            this.mediaSection.appendChild(mediaTemplate.createMediaCard())
        })*/
        
        // Insert photographer's name in Form's header
        const formPhotographerName = document.querySelector(".photographerName")
        formPhotographerName.innerHTML = "Contactez-moi" + `<br>` + `${photographerById.name}`

        // Create info panel
        const panelTemplate = new Panel(photographerById, allMedia)
        this.panelSection.append(panelTemplate.createPanel())

        // Create lightbox
        const lightboxTemplate = new Lightbox(allMedia)
        this.lightboxSection.append(lightboxTemplate.createLightbox())
    }
}

const profilePage = new ProfilePage()
profilePage.main()