let theme=document.querySelector("#theme")
let body = document.querySelector("body")
let home=document.querySelector(".home-section")
let current="light"

theme.addEventListener("click",() =>{
    if(current==="light")
    {   
        current="dark"
        body.style.backgroundColor="#161618"
        home.style.backgroundColor="#161618"
        home.style.color="white"
        document.querySelector(".about-section").style.backgroundColor="#161618"
        document.querySelector(".about-section").style.color="white"
        document.querySelector(".timeline-box ").style.backgroundColor="#161618"
        document.querySelector(".timeline-shadow").style.backgroundColor="#161618"
        document.querySelector(".service-section").style.backgroundColor="#161618"
       
    }
    else{
       current="light"
    body.style.backgroundColor="white"
    home.style.backgroundColor="white"
    document.querySelector(".about-section").style.backgroundColor="white"
    document.querySelector(".about-section").style.color="black"
    home.style.color="black"
    document.querySelector(".timeline-shadow").style.backgroundColor="white"
    document.querySelector(".timeline-box").style.backgroundColor="white"

    }

})
