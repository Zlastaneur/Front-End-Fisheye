class Api {
    constructor(url) {
        this._url = url
    }

    async getAllPhotographers() {
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

    async getPhotographerById(id){
        try {
            const response = await fetch(this._url)
            const data = await response.json()

            const photographerID = data.photographers.find((photographer) => photographer.id === id)
            return photographerID
        } catch (error) {
            throw new Error("Fetching error ", error)
        }
    }
}

class ApiData extends Api{
    constructor(url){
        super(url)
    }

    async getAllData(){
        return await this.getAllPhotographers()
    }

    async getDataById(id){
        return await this.getPhotographerById(id)
    }
}