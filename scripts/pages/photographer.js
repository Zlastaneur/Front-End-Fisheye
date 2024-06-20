class ProfilePage {
    constructor() {
        const id = new URL(window.location.href).searchParams.get("id")
        this.id = parseInt(id)
        console.log(this.id)

        this.apiData = new ApiData("./photographers.json")

        this.headerSection = document.querySelector(".photographer-header")
        this.mediaSection = document.querySelector(".photographer-media")
        this.panelSection = document.querySelector(".panel")
    }

    async main(){
        // Get Api data of the photographer
        const photographerById = await this.apiData.getPhotographerById(this.id)
        console.log(photographerById)

        // Get all the media with photographer's id
        const allMedia = await this.apiData.getMediaById(this.id)
        console.log(allMedia)

        // Create header template with photographer Data
        const headerTemplate = new ProfileHeader(photographerById)
        this.headerSection.append(headerTemplate.createProfileHeader())

        // Create media cards for each media found with photographer's id
        allMedia.forEach(media => {
            const mediaTemplate = new MediaCard(media)
            this.mediaSection.appendChild(mediaTemplate.createMediaCard())
        })

        // Create info panel
        const panelTemplate = new Panel(photographerById, allMedia)
        this.panelSection.append(panelTemplate.createPanel())

    }
}


const profilePage = new ProfilePage()
profilePage.main()