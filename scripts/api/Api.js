class Api{
    constructor(url) {
        this._url = url
    }

    async getAllPhotographersData(){
        try {
            const response = await fetch(this._url)
            const data = await response.json()

            const allPhotographers = data.photographers

            return allPhotographers
        }
        catch(error) {
            throw new Error("Fetching error ", error)
        }   
    }

    async getPhotographerDataById(id){
        try {
            const response = await fetch(this._url)
            const data = await response.json()

            const photographerID = data.photographers.find((photographer) => photographer.id === id)
            return photographerID
        } catch(error) {
            throw new Error("Fetching error ", error)
        }
    }

    async getMediaDataById(id){
        try {
            const response = await fetch(this._url)
            const data = await response.json()

            const photographerMedia = data.media.filter((media) => media.photographerId === id)
            return photographerMedia
        } catch(error) {
            throw new Error("Fetching error ", error)
        }
    }
}

class ApiData extends Api{
    constructor(url){
        super(url)
    }

    async getAllPhotographers(){
        return await this.getAllPhotographersData()
    }

    async getPhotographerById(id){
        return await this.getPhotographerDataById(id)
    }

    async getMediaById(id){
        return await this.getMediaDataById(id)
    }
}