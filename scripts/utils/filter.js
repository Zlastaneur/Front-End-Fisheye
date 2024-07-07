class FilterScript{

    constructor(mediaById){
        // Get all the inputs
        this._filterBtn = document.querySelector(".filter_btn")
        this._activeFilterBtn = document.querySelector("#active_filter")
        this._allFilters = Array.from(document.querySelectorAll(".dropdown_content li button"))
        this._selectedFilter = this._allFilters.find(filter => filter.textContent == this._activeFilterBtn.textContent)
        this._selectedFilter.style.display = "none"
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
            filter.addEventListener("click", () => {
                const filterValue = filter.textContent
                this._activeFilterBtn.textContent = filterValue
    
                if (this._selectedFilter) this._selectedFilter.style.display = "block";
    
                filter.style.display = "none";
                this._selectedFilter = filter;
    
                this.toggleFilterDropdown()
            })
        })
    }
}

/*
sortMedia()

function sortMedia(){
    if (selectedFilter.textContent == "Popularité"){
        console.log("popu")

    } else if (selectedFilter.textContent == "Date"){
        console.log("date")
    } else if (selectedFilter.textContent == "Titre"){
        console.log("titre")
    } else (console.log("Erreur de tri"))
}
    */