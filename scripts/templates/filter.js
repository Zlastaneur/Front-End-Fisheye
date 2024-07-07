class Filter{
    constructor(photographerById, mediaById){
        this._photographerData = photographerById
        this._mediaById = mediaById
    }

    createFilter(){
        const filterWrapper = document.createElement("div")
        filterWrapper.classList.add("filterWrapper")
        
        const filterContent = 
        `
            <h3>Trier par</h3>
            <div class="filter_content">
                <div class="dropdown">
                <button class="filter_btn">
                <span id="active_filter">Popularité</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
                </button>
                <ul class="dropdown_content">
                    <li><button>Popularité</button></li>
                    <li><button>Date</button></li>
                    <li><button>Titre</button></li>
                </ul>
            </div>
        </div>
        `

        filterWrapper.innerHTML = filterContent

        setTimeout(() => {
                const filter = new FilterScript(this._mediaById)
              
                filter.toggleFilterDropdown()
                filter.setActiveFilter()
                // filter.filterPopularité(this._mediaById, this._photographerData)
                // filter.filterDate(this._mediaById, this._photographerData)
                // filter.filterTitre(this._mediaById, this._photographerData)
          }, 25);

        return filterWrapper
    }
}