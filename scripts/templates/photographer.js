function photographerTemplate(data) {
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
}