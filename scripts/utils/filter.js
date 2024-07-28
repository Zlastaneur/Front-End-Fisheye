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
        
        // Function to handle the dropdown toggle
        const handleDropdownToggle = () => {
            const dropdown = document.querySelector(".dropdown_content")
            const isOpen = dropdown.classList.toggle("active")

            // Update ARIA attribute for accessibility
            this._filterBtn.setAttribute("aria-expanded", isOpen.toString())

            document.querySelector(".fa-chevron-down").classList.toggle("rotate")
        }

        // Event listeners for click and key press to toggle the like
        this._filterBtn.addEventListener('click', handleDropdownToggle)
        this._filterBtn.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handleDropdownToggle()
            }
        })

    }

    // Set active filter based on user selection
    setActiveFilter(){

        // Function to handle setting active filter and updating UI
        const handleSetActiveFilter = (filter) => {
            const filterValue = filter.textContent
            this._activeFilterBtn.textContent = filterValue
    
            // Display previously selected filter and update aria-selected attribute
            if (this._selectedFilter){
                this._selectedFilter.style.display = "block"
                this._selectedFilter.setAttribute("aria-selected", "false")
            }
            
            // Hide the current filter and update aria-selected attribute
            filter.style.display = "none"
            filter.setAttribute("aria-selected", "true")
            this._selectedFilter = filter

            // Toggle dropdown visibility and update aria-expanded attribute
            const dropdown = document.querySelector(".dropdown_content")
            const isOpen = dropdown.classList.toggle("active")
            this._filterBtn.setAttribute("aria-expanded", isOpen.toString())
            document.querySelector(".fa-chevron-down").classList.toggle("rotate")

            // Sort media based on selected filter
            this.sortMedia()
        }

        // Attach event listeners to each filter button
        this._allFilters.forEach(filter => {
            filter.setAttribute("tabindex", "0") // Make filter focusable
    
            filter.addEventListener("click", () => handleSetActiveFilter(filter))
    
            filter.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    handleSetActiveFilter(filter)
                }
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
