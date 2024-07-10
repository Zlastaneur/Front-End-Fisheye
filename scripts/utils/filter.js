class FilterScript {
    constructor(photographerById, mediaById) {
        // Get all the inputs
        this._mediaList = mediaById
        this._photographerData = photographerById

        this._mediaSection = document.getElementById("photographer-media")
        this._filterBtn = document.querySelector(".filter_btn")
        this._activeFilterBtn = document.querySelector("#active_filter")
        this._allFilters = Array.from(document.querySelectorAll(".dropdown_content li button"))

        this._selectedFilter = this._allFilters.find(filter => filter.textContent == this._activeFilterBtn.textContent)
        this._selectedFilter.style.display = "none"

        this._previousMediaList = [...this._mediaList] // NEW
    }

    // Open / Close the dropdown menu
    toggleFilterDropdown(){
        this._filterBtn.addEventListener("click", () => {
            const dropdown = document.querySelector(".dropdown_content")
            dropdown.classList.toggle("active")
            document.querySelector(".fa-chevron-down").classList.toggle("rotate")
        })
    }
    
    setActiveFilter(){
        this._allFilters.forEach(filter => {
            filter.addEventListener("click", () => {
                const filterValue = filter.textContent
                this._activeFilterBtn.textContent = filterValue
    
                if (this._selectedFilter) this._selectedFilter.style.display = "block"
    
                filter.style.display = "none"
                this._selectedFilter = filter

                const dropdown = document.querySelector(".dropdown_content")
                dropdown.classList.toggle("active")
                document.querySelector(".fa-chevron-down").classList.toggle("rotate")

                this.sortMedia()
            })
        })
    }

   /* hasMediaListChanged(){ // ---- NEW
        for (let i = 0; i < this._mediaList.length; i++) {
            if (this._mediaList[i] !== this._previousMediaList[i]) {
                return true
            }
        }
        return false
    } */// ---

    sortMedia(){
        switch (this._selectedFilter.textContent){
            case "Popularité":
                this.sortByPopularity()
                break
            case "Date":
                this.sortByDate()
                break
            case "Titre":
                this.sortByTitle()
                break
            default:
                console.log("Sorting ERROR")
        }
       // this._previousMediaList = [...this._mediaList] // NEW
    }

    sortByPopularity(){
        this._mediaList.sort((a, b) => b.likes - a.likes)
       // this.hasMediaListChanged()
        this.updateMediaSection(this._mediaList)
        /*if (this._mediaList == actualMediaList){
            this.updateMediaSection(this._mediaList)
        }*/
    }

    sortByTitle(){
        this._mediaList.sort((a, b) => a.title.localeCompare(b.title))
       // this.hasMediaListChanged()
        this.updateMediaSection(this._mediaList)
    }

    sortByDate(){
        this._mediaList.sort((a, b) => new Date(b.date) - new Date(a.date))
       // this.hasMediaListChanged()
        this.updateMediaSection(this._mediaList)
    }

    updateMediaSection(mediaList) {
       // if (this.hasMediaListChanged()){
            this._mediaSection.innerHTML = ""

            mediaList.forEach((media, index) => {
                const mediaTemplate = new MediaCard(media, index, mediaList, this._photographerData)
                this._mediaSection.appendChild(mediaTemplate.createMediaCard())
            })
        //}
    }
}
