class PhotographerCard{
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographerCard(){
        const photographer_article = document.createElement("article")
        const photographerCard = 
        `
            <a href="photographer.html?id=${this._photographer.id}" alt="${this._photographer.name}">
                <img src="assets/photographers/${this._photographer.portrait}" alt="">
                <h2>${this._photographer.name}</h2>
            </a>
            <p class="localisation"> ${this._photographer.city}, ${this._photographer.country}</p>
            <p class="tagline">${this._photographer.tagline}</p>
            <p class="price">${this._photographer.price}€/jour</p>
        `

        photographer_article.innerHTML = photographerCard
        return photographer_article
    }
}