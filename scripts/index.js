
const setClass = () => {
    let modal = document.getElementById("modal");
    modal.setAttribute("class", "active");
    let popup = document.getElementById("popup");
    popup.setAttribute("class", "active");
    console.log("clicked")
}
document.getElementById("signInButton").addEventListener("click", setClass);
document.getElementById("prdCard1").addEventListener("click", setClass);
document.getElementById("closesignin").addEventListener("click", ()=>{
    let modal = document.getElementById("modal");
    modal.classList.remove("active");
    let popup = document.getElementById("popup");
    popup.classList.remove("active");
    console.log("clicked")
}) 