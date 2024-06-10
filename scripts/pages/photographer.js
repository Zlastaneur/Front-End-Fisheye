class ProfilePage {
    constructor() {
        const id = new URL(window.location.href).searchParams.get("id");
        this.id = parseInt(id);
        console.log(this.id)

        this.apiData = new ApiData("./photographers.json")

        this.headerSection = document.querySelector(".photograph-header")
    }

    async main(){
        const photographerById = await this.apiData.getDataById(this.id)
        console.log(photographerById)

        const Template = new ProfileHeader(photographerById)
        this.headerSection.append(Template.createProfileHeader())

        /*this.headerSection.appendChild(Template.createFirstPart())
        this.headerSection.appendChild(Template.createSecondPart())
        this.headerSection.appendChild(Template.createThirdPart())*/

    }
}
    
const profilePage = new ProfilePage()
profilePage.main()