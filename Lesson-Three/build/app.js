const hamburger=document.querySelector("#hamburger"); 
const menu=document.querySelector("#menu");
const newClass=document.querySelectorAll(".newClass")
const hLinks=document.querySelectorAll(".hLink")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    newClass.forEach(element => {
        element.classList.toggle("bg-white");
    })
})

hLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.add("hidden");
        newClass.forEach(element => {
            element.classList.remove("bg-white");
        })
    })
})