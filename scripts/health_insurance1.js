
function male(){

    let all_boxes=document.querySelectorAll(".male-female div")
    
    all_boxes.forEach(e=>{
        e.style.backgroundColor="white"
    })

    let male_box=document.querySelector(".male")
    let gender=male_box.innerText
    localStorage.setItem("gender",gender)
    if(male_box.style.backgroundColor==="white"){
        male_box.style.backgroundColor="rgb(213, 247, 213)"
    }
    else{
        male_box.style.backgroundColor="white"
    }
}


function female(){

    let all_boxes=document.querySelectorAll(".male-female div")

    all_boxes.forEach(e=>{
        e.style.backgroundColor="white"
    })

    let male_box=document.querySelector(".female")
    let gender=male_box.innerText
    localStorage.setItem("gender",gender)
    if(male_box.style.backgroundColor==="white"){
        male_box.style.backgroundColor="rgb(213, 247, 213)"
        male_box.style.color="gray"
        console.log("hi")
    }
    else{
        male_box.style.backgroundColor="white"
    }
}

document.getElementById("continue_button").addEventListener("click",function(){window.location.href="./health_insurance2.html"})

function save_name(){
    let 
}

function homepage(){
    window.location.href="../index.html"
}
