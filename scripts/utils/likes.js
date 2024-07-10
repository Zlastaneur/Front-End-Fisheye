class Likes{
    constructor(media, likeElement){
        this._media = media
        this._likeElement = likeElement

        this._isLiked = this._media.isLiked || false
    }

    toggleLike(photographer, mediaList){
        this._isLiked = !this._isLiked
        this._media.isLiked = this._isLiked

        if (this._isLiked){
            this.likeMedia()
        } else {
            this.unlikeMedia()
        }
        
        this.updateLikeUI()

        const filter = new FilterScript(photographer, mediaList)
        filter.sortMedia()
    }

    likeMedia(){
        this._media.likes ++
    }

    unlikeMedia(){
        this._media.likes --
    }

    updateLikeUI(){
        this._likeElement.classList.toggle("liked", this._isLiked)
        const heartElement = this._likeElement.querySelector("i")
        heartElement.classList.replace("fa-regular", "fa-solid")
    }
}

