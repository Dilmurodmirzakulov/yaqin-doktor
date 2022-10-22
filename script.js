const navLink = document.querySelector(".nav-link")
const tabMenu = document.querySelector(".tab-menu-wrapper")
const testLink = document.querySelector(".test-link")

// navLink.addEventListener("mouseover", ()=>{
//     navLink.classList.add("test-link")
//     tabMenu.style.display = "block"
// })
// navLink.addEventListener("mouseout", ()=>{
//     navLink.classList.remove("test-link")
//     tabMenu.style.display = "none"
// })
// tabMenu.addEventListener("mouseover", ()=>{
//     tabMenu.style.display = "block"
// })

let temp;

navLink.addEventListener("mouseover", ()=>{
    temp = "test-link"
})
tabMenu.addEventListener("mouseover", ()=>{
    temp = "test-link"
})
navLink.addEventListener("mouseout", ()=>{
    temp = ""
})
tabMenu.addEventListener("mouseout", ()=>{
    temp = ""
})
if (temp == "test-link" || temp == "test-link") {
    navLink.classList.add("test-link")
    tabMenu.style.display = "block"
}else if(temp == "" || temp == ""){
    navLink.classList.remove("test-link")
    tabMenu.style.display = "none"

}