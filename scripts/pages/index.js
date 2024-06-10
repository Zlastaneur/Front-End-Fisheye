  /*async function getPhotographers() {

        const response = await fetch("./photographers.json")
        const photographers = await response.json()
        console.log(photographers)

        return photographers
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();*/

class Homepage {
    constructor() {
        this.photographersSection = document.querySelector(".photographer_section")
        this.apiData = new ApiData("./photographers.json")
    }

    async main(){
        const allPhotographers = await this.apiData.getAllData()

        allPhotographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.photographersSection.appendChild(Template.createPhotographerCard())
        });
    }
}
    
const homepage = new Homepage()
homepage.main()