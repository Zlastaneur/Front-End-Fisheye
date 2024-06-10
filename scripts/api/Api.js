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
            throw new Error("Fetching error", error)
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
}