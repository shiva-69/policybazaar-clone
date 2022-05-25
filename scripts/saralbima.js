import navbar from "../components/productnavbar.js";

var nav=document.querySelector(".nav");

nav.innerHTML=navbar();



document.getElementById("mainpage").addEventListener("click",function(){
    window.location.href="../index.html";
})

document.querySelector("form").addEventListener("submit",function(){
    createStudent();
    window.location.href="../plan.html";
});

async function createStudent(){
    event.preventDefault();
    try {
        let name =document.getElementById("name").value;
        let gender =document.getElementById("gender").value;
        let dob =document.getElementById("dob").value;
        let number =document.getElementById("mobile").value;
    

        let body={
            name,
            gender,
            dob,
            number
        }

        let res=await fetch("http://localhost:3000/user",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "content-Type":"application/json"
            }
        })

        let data=await res.json();
        
    } catch (error) {
        console.log(error);
    }
}