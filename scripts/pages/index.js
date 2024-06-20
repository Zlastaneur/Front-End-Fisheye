class Homepage {
    constructor() {
        this.photographersSection = document.querySelector(".photographer_section")
        this.apiData = new ApiData("./photographers.json")
    }

    async main(){
        const allPhotographers = await this.apiData.getAllPhotographers()
        console.log(allPhotographers)

        allPhotographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.photographersSection.appendChild(Template.createPhotographerCard())
        });
    }
}


const homepage = new Homepage()
homepage.main()