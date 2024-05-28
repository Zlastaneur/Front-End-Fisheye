function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const firstP = document.createElement( 'p' )
        firstP.textContent = `${city}, ${country}`
        const secondP = document.createElement( 'p' )
        secondP.textContent = tagline
        const thirdP = document.createElement( 'p' )
        thirdP.textContent = `${price}€/jour`
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(firstP);
        article.appendChild(secondP);
        article.appendChild(thirdP);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}