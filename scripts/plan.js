import navbar from "../components/productnavbar.js";

var nav=document.querySelector(".nav");

nav.innerHTML=navbar();

document.getElementById("mainpage").addEventListener("click",function(){
    window.location.href="../index.html";
})