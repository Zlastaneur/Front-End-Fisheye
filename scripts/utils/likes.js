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

            this._likeElement.classList.toggle("liked", this._isLiked);


        const filter = new FilterScript(photographer, mediaList)
        filter.sortMedia()
    }

    likeMedia(){
        this._media.likes ++
    }

    unlikeMedia(){
        this._media.likes --
    }
}

