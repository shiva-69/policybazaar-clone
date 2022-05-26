document.getElementById("cover").addEventListener("click", () =>{
    let modal = document.getElementById("modal");
    modal.setAttribute("class", "active");
    let popup = document.getElementById("sortDisplay");
    popup.setAttribute("class", "active");
})

document.getElementById("closeCoverSort").addEventListener("click", () => {
    let modal = document.getElementById("modal");
    modal.classList.remove("active");
    let popup = document.getElementById("sortDisplay");
    popup.classList.remove("active");
})