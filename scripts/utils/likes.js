class Likes{
    constructor(media, likeElement){
        this._media = media
        this._likeElement = likeElement

        this._panelElement = document.querySelector(".infoPanel")

        this._isLiked = this._media.isLiked || false // Initialize liked state based on media
    }


    toggleLike(photographer, mediaList){
        this._isLiked = !this._isLiked // Toggle like status
        this._media.isLiked = this._isLiked // Update media's liked state

        if (this._isLiked){
            this.likeMedia() // Increment likes if liked
        } else {
            this.unlikeMedia() // Decrement likes if unliked
        }
        
        this.updateLikeUI() // Update the UI to reflect new like status

        // Update sorting and panel after like/unlike
        const filter = new FilterScript(photographer, mediaList)
        filter.sortMedia()

        this._panelElement.innerHTML = ""
        
        const panelTemplate = new Panel(photographer, mediaList)
        this._panelElement.append(panelTemplate.createPanel())
    }

    likeMedia(){
        this._media.likes ++
    }

    unlikeMedia(){
        this._media.likes --
    }

    updateLikeUI(){
         // Toggle liked class on like element
        this._likeElement.classList.toggle("liked", this._isLiked)

        // Find heart icon element
        const heartElement = this._likeElement.querySelector("i")

        // Replace outline heart with solid heart
        heartElement.classList.replace("fa-regular", "fa-solid") 
    }
}

