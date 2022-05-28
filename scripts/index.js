document.querySelector(".card8").addEventListener("click",function(){
    window.location.href="../saralbima.html";
})

document.getElementById("renew1").addEventListener("click",function(){
    window.location.href="../insurenceRenewal.html";
})

const setClass = () => {
    let modal = document.getElementById("modal");
    modal.setAttribute("class", "active");
    let popup = document.getElementById("popup");
    popup.setAttribute("class", "active");
}
document.getElementById("signInButton").addEventListener("click", setClass);
document.getElementById("prdCard1").addEventListener("click", () => {
    window.location.href = "../html/health_insurance1.html";
});
document.getElementById("closesignin").addEventListener("click", ()=>{
    let modal = document.getElementById("modal");
    modal.classList.remove("active");
    let popup = document.getElementById("popup");
    popup.classList.remove("active");
}) 




let timer;
let slideIndex = 0;
const slideshow = () => {
    let slides = document.getElementsByClassName("carouselDivs");
    console.log(slides)
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = "block"; 
    timer = setTimeout(slideshow, 4000);
}

slideshow();