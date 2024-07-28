class PhotographerCard{
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographerCard(){
        const photographer_article = document.createElement("article")
        const photographerCard = 
        `
            <a href="photographer.html?id=${this._photographer.id}" alt="${this._photographer.name}">
                <img tabindex="0" src="assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}">
                <h2 tabindex="0" aria-label="Nom du photographe">${this._photographer.name}</h2>
            </a>
            <p tabindex="0" aria-label="Localisation du photographe" class="localisation"> ${this._photographer.city}, ${this._photographer.country}</p>
            <p tabindex="0" aria-label="Phrase d'accroche du photographe" class="tagline">${this._photographer.tagline}</p>
            <p tabindex="0" aria-label="prix du photographe" class="price">${this._photographer.price}€/jour</p>
        `

        photographer_article.innerHTML = photographerCard
        
        return photographer_article
    }
}