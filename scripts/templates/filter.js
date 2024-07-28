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
            <label tabindex="0" for="dropdown_content">Trier par</label>
            <div class="filter_content">
                <div class="dropdown">
                <button class="filter_btn" tabindex="0" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="active_filter">
                <span id="active_filter">Popularité</span>
                <span><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></span>
                </button>
                <ul id="dropdown_content" class="dropdown_content" role="listbox" aria-labelledby="active_filter">
                    <li><button role="listbox" aria-selected="true" tabindex="0">Popularité</button></li>
                    <li><button role="listbox" aria-selected="false" tabindex="0">Date</button></li>
                    <li><button role="listbox" aria-selected="false" tabindex="0">Titre</button></li>
                </ul>
            </div>
        </div>
        `

        filterWrapper.innerHTML = filterContent

        setTimeout(() => {
                const filter = new FilterScript(this._photographerData, this._mediaById)
              
                filter.toggleFilterDropdown()
                filter.setActiveFilter()
                filter.sortMedia()
          }, 25);

        return filterWrapper
    }
}