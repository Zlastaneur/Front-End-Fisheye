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
                const filter = new FilterScript(this._photographerData, this._mediaById)
              
                filter.toggleFilterDropdown()
                filter.setActiveFilter()
                filter.sortByPopularity()
                filter.sortByTitle()
                filter.sortByDate()
          }, 25);

        return filterWrapper
    }
}