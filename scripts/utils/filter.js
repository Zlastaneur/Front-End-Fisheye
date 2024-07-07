class FilterScript{

    constructor(photographerById, mediaById){
        // Get all the inputs
        this._filterBtn = document.querySelector(".filter_btn")
        this._activeFilterBtn = document.querySelector("#active_filter")
        this._allFilters = Array.from(document.querySelectorAll(".dropdown_content li button"))
        this._selectedFilter = this._allFilters.find(filter => filter.textContent == this._activeFilterBtn.textContent)
        this._selectedFilter.style.display = "none"
        this._mediaList = mediaById
        this._photographerData = photographerById
    }

    // Open / Close the dropdown menu
    toggleFilterDropdown() {
        this._filterBtn.addEventListener("click", (e)=>{
            const dropdown = document.querySelector(".dropdown_content")
            dropdown.classList.toggle("active")
            document.querySelector(".fa-chevron-down").classList.toggle("rotate")
        })
    }
    
    setActiveFilter(){
        this._allFilters.forEach(filter => {
            filter.addEventListener("click", (e) => {
                const filterValue = filter.textContent
                this._activeFilterBtn.textContent = filterValue
    
                if (this._selectedFilter) this._selectedFilter.style.display = "block";
    
                filter.style.display = "none";
                this._selectedFilter = filter;
    
                const dropdown = document.querySelector(".dropdown_content")
                dropdown.classList.toggle("active")
                document.querySelector(".fa-chevron-down").classList.toggle("rotate")
                this.sortByPopularity()
                this.sortByTitle()
                this.sortByDate()
                
            })
        })
    }
/*
    sortMedia(){
        if (selectedFilter.textContent == "Popularité"){
            this._sortByPopularity()

        } else if (selectedFilter.textContent == "Date"){
            console.log("date")
        } else if (selectedFilter.textContent == "Titre"){
            console.log("titre")
        } else (console.log("Erreur de tri"))
    }*/

    sortByPopularity(){
        if(this._selectedFilter.textContent == "Popularité"){
            const mediaSection = document.getElementById("photographer-media")
            
            this._mediaList.sort((a,b) => (
                a.likes < b.likes ? 1 : b.likes < a.likes ? -1 : 0
            ))

            mediaSection.innerHTML = ""

            this._mediaList.forEach(media => {
                const mediaTemplate = new MediaCard(media)
                mediaSection.appendChild(mediaTemplate.createMediaCard())
            })
        }
    }

    sortByTitle(){
        if(this._selectedFilter.textContent == "Titre"){
            const mediaSection = document.getElementById("photographer-media")
            
            this._mediaList.sort((a,b) => a.title.localeCompare(b.title))

            mediaSection.innerHTML = ""

            this._mediaList.forEach(media => {
                const mediaTemplate = new MediaCard(media)
                mediaSection.appendChild(mediaTemplate.createMediaCard())
            })
        }
    }

    sortByDate(){
        if(this._selectedFilter.textContent == "Date"){
            const mediaSection = document.getElementById("photographer-media")
            
            const sorting = this._mediaList.sort((a,b) => {
                const aDate = new Date(a.date)
                const bDate = new Date(b.date)
                return bDate - aDate
            })
                

            mediaSection.innerHTML = ""

            sorting.forEach(media => {
                const mediaTemplate = new MediaCard(media)
                mediaSection.appendChild(mediaTemplate.createMediaCard())
            })
        }
    }
}

