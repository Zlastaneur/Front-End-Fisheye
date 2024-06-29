// Get all the inputs
const filterBtn = document.querySelector(".filter_btn")
const activeFilterBtn = document.querySelector("#active_filter")
const allFilters = Array.from(document.querySelectorAll(".dropdown_content li button"))

// Open / Close the dropdown menu
const toggleFilterDropdown = () => {
    const dropdown = document.querySelector(".dropdown_content")
    dropdown.classList.toggle("active")
    document.querySelector(".fa-chevron-down").classList.toggle("rotate")
}
filterBtn.addEventListener("click", toggleFilterDropdown)

// Find the selected filter and hide it from the dropdown
let selectedFilter = allFilters.find(filter => filter.textContent == activeFilterBtn.textContent)
selectedFilter.style.display = "none"


allFilters.forEach(filter => {
    filter.addEventListener("click", () => {
        const filterValue = filter.textContent
        activeFilterBtn.textContent = filterValue

        if (selectedFilter) selectedFilter.style.display = "block";

        filter.style.display = "none";
        selectedFilter = filter;

        toggleFilterDropdown();
    })
})
