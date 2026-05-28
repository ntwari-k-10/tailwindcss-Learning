const hamburger=document.querySelector("#hamburger"); 
const menu=document.querySelector("#menu");
const newClass=document.querySelectorAll(".newClass")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    newClass.forEach(element => {
        element.classList.toggle("bg-white");
    })
})