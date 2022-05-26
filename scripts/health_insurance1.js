
function male(){

    // console.log("hi")
    let male_box=document.querySelector(".male")
    let gender=male_box.innerText
    // console.log(gender)
    localStorage.setItem("gender",gender)
    if(male_box.style.backgroundColor==="white"){
        male_box.style.backgroundColor="rgb(184, 230, 184)"
  
        // console.log("hi")
    }
    else{
        male_box.style.backgroundColor="white"
    }
}
function female(){

    // console.log("hi")
    let male_box=document.querySelector(".female")
  
    if(male_box.style.backgroundColor==="white"){
        male_box.style.backgroundColor="rgb(184, 230, 184)"
        male_box.style.color="gray"
        console.log("hi")
    }
    else{
        male_box.style.backgroundColor="white"
    }
}

function save_name(){
    let 
}
