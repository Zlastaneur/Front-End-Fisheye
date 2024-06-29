class ProfilePage {
    constructor() {
        const id = new URL(window.location.href).searchParams.get("id")
        this.id = parseInt(id)

        this.apiData = new ApiData("./photographers.json")

        this.headerSection = document.getElementById("photographer-header")
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

        // Create media cards for each media found with photographer's id
        allMedia.forEach(media => {
            const mediaTemplate = new MediaCard(media)
            this.mediaSection.appendChild(mediaTemplate.createMediaCard())
        })
        
        // Insert photographer's name in Form's header
        const formPhotographerName = document.querySelector(".photographerName")
        formPhotographerName.textContent = photographerById.name

        // Create info panel
        const panelTemplate = new Panel(photographerById, allMedia)
        this.panelSection.append(panelTemplate.createPanel())

        // Create lightbox
        const lightboxTemplate = new Lightbox(photographerById, allMedia)
        this.lightboxSection.append(lightboxTemplate.createLightbox())
    }
}

const profilePage = new ProfilePage()
profilePage.main()

        //this.lightboxSection = document.querySelector(".lightbox")
    /*
        // Create lightbox
        const medias = document.querySelectorAll(".mediaCard")
        let mediaSrc
        let mediaName

        medias.forEach(media => {
            media.addEventListener("click", (e) => {
                mediaSrc = e.target.src
                mediaName = e.currentTarget.querySelector(".title").innerText

                const lightboxTemplate = new Lightbox(mediaSrc, mediaName)
                this.lightboxSection.append(lightboxTemplate.createLightbox())
        })
        })
    */