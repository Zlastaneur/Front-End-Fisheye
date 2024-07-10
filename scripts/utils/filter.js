class FilterScript {
    constructor(photographerById, mediaById) {
        // Initialize with provided data
        this._mediaList = mediaById
        this._photographerData = photographerById

        // DOM elements
        this._mediaSection = document.getElementById("photographer-media")
        this._filterBtn = document.querySelector(".filter_btn")
        this._activeFilterBtn = document.querySelector("#active_filter")
        this._allFilters = Array.from(document.querySelectorAll(".dropdown_content li button"))

        this._selectedFilter = this._allFilters.find(filter => filter.textContent == this._activeFilterBtn.textContent)
        this._selectedFilter.style.display = "none"
        
        // Store a copy of the initial media list
        this._previousMediaList = [...this._mediaList]
    }

    // Toggle dropdown menu visibility
    toggleFilterDropdown(){
        this._filterBtn.addEventListener("click", () => {
            const dropdown = document.querySelector(".dropdown_content")
            dropdown.classList.toggle("active")
            document.querySelector(".fa-chevron-down").classList.toggle("rotate")
        })
    }

    // Set active filter based on user selection
    setActiveFilter(){
        this._allFilters.forEach(filter => {
            filter.addEventListener("click", () => {
                const filterValue = filter.textContent
                this._activeFilterBtn.textContent = filterValue
    
                if (this._selectedFilter) this._selectedFilter.style.display = "block"
    
                filter.style.display = "none"
                this._selectedFilter = filter

                // Toggle dropdown visibility
                const dropdown = document.querySelector(".dropdown_content")
                dropdown.classList.toggle("active")
                document.querySelector(".fa-chevron-down").classList.toggle("rotate")

                this.sortMedia()
            })
        })
    }

    // Sort media based on the selected filter
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
    }

    sortByPopularity(){
        this._mediaList.sort((a, b) => b.likes - a.likes)
        this.updateMediaSection(this._mediaList)
    }

    sortByTitle(){
        this._mediaList.sort((a, b) => a.title.localeCompare(b.title))
        this.updateMediaSection(this._mediaList)
    }

    sortByDate(){
        this._mediaList.sort((a, b) => new Date(b.date) - new Date(a.date))
        this.updateMediaSection(this._mediaList)
    }

    // Update the media section in the DOM with new media list
    updateMediaSection(mediaList) {
        this._mediaSection.innerHTML = "" // Clear existing media

        // Generate and append media cards based on the updated list
        mediaList.forEach((media, index) => {
            const mediaTemplate = new MediaCard(media, index, mediaList, this._photographerData)
            this._mediaSection.appendChild(mediaTemplate.createMediaCard())
        })
    }
}
