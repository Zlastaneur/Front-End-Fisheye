/*function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data

    const picture = `assets/photographers/${portrait}`

    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        const a = document.createElement( 'a' )
        a.setAttribute("href", `photographer.html?id=${id}`)
        a.setAttribute("alt", name)
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", "")
        const h2 = document.createElement( 'h2' )
        h2.textContent = name
        const firstP = document.createElement( 'p' )
        firstP.textContent = `${city}, ${country}`
        firstP.classList.add("localisation")
        const secondP = document.createElement( 'p' )
        secondP.textContent = tagline
        secondP.classList.add("tagline")
        const thirdP = document.createElement( 'p' )
        thirdP.textContent = `${price}€/jour`
        thirdP.classList.add("price")

        article.appendChild(a)
        a.appendChild(img)
        a.appendChild(h2)
        article.appendChild(firstP)
        article.appendChild(secondP)
        article.appendChild(thirdP)
        return (article)
    }
    return { getUserCardDOM }
}*/

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