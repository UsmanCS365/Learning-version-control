const btn =document.querySelector("#btn")
const h1 =document.createElement("h1") 
h1.textContent ="Usman is amazing"
h1.style.backgroundColor ="blue"
h1.style.color ="white"
h1.style.fontSize ="3rem"
h1.style.display ="none"
document.body.appendChild(h1)
btn.addEventListener("click", ()=>{
    h1.style.display ="block"
})