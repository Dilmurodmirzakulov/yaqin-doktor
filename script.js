const navLink = document.querySelector(".nav-link")
const tabMenu = document.querySelector(".tab-menu-wrapper")
const testLink = document.querySelector(".test-link")
const menuNavItem = document.querySelector(".menu-nav-item");
const navItems = document.querySelectorAll(".nav-item")
const languageBtn = document.querySelector(".language-btn")
const languagesContainer = document.querySelector(".languages-container")
navItems.forEach(x=>x.addEventListener("mouseover", ()=>{
    x.classList.add("menu-nav-item")
}))

navItems.forEach(x=>x.addEventListener("mouseout", ()=>{
    x.classList.remove("menu-nav-item")
}))

languageBtn.addEventListener("click", ()=>{
    languagesContainer.style.display == 'block' ? languagesContainer.style.display = 'none' : languagesContainer.style.display = 'block'
})