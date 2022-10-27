const mdNavItem = document.querySelector(".md-nav-item")
const tabMenu = document.querySelector(".tab-menu-wrapper")
const mdNavLink = document.querySelector(".md-nav-link")
const languageBtn = document.querySelector(".language-btn")
const languagesContainer = document.querySelector(".languages-container")

mdNavItem.addEventListener("mouseover", ()=>{
    mdNavItem.classList.add("active")
    mdNavLink.style.color = "#4c6fff"
    tabMenu.style.display = "block"
})

mdNavItem.addEventListener("mouseout", ()=>{
    mdNavItem.classList.remove("active")
    mdNavLink.style.color = "#fff"
    tabMenu.style.display = "none"
})

// SHOW LANGUAGES 
languageBtn.addEventListener("click", () => {
    languagesContainer.style.display == 'block' ? languagesContainer.style.display = 'none' : languagesContainer.style.display = 'block'
})