class ProfilePage {
    constructor() {
        const id = new URL(window.location.href).searchParams.get("id");
        this.id = parseInt(id);
        console.log(this.id)

        this.apiData = new ApiData("./photographers.json")

        this.headerSection = document.querySelector(".photographer-header")
        this.mediaSection = document.querySelector(".photographer-media")
    }

    async main(){
        const photographerById = await this.apiData.getPhotographerById(this.id)
        console.log(photographerById)

        const headerTemplate = new ProfileHeader(photographerById)
        this.headerSection.append(headerTemplate.createProfileHeader())

        const allMedia = await this.apiData.getMediaById(this.id)
        console.log(allMedia)

        allMedia.forEach(media => {
            const mediaTemplate = new MediaCard(media)
            this.mediaSection.appendChild(mediaTemplate.createMediaCard())
        });
    }
}


const profilePage = new ProfilePage()
profilePage.main()