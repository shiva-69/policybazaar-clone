
let all_boxes=document.querySelectorAll(".female")

all_boxes.forEach(e=>{
  
    e.addEventListener("click",function(){
        document.getElementById("select_age").innerHTML=""
       
        if(e.style.backgroundColor===""){
        e.style.backgroundColor="lightGreen"

        document.getElementById("button").style.marginTop="5%"
        let select=document.createElement("select")
        // select.innerText="select age"
        select.setAttribute("id","select")
        
        let option=document.createElement("option")
        option.innerText="Select Age"
        select.append(option)
        for(i=18;i<101;i++){
            let p=document.createElement("option")
            p.innerText=i+" "+"yr"
            select.append(p)
        }
       let para=document.createElement("p")
       para.innerText="* Required"
        document.getElementById("select_age").append(select,para)

        }
        else{
            e.style.backgroundColor=""
            document.getElementById("button").style.marginTop="-10px"
        }
        // all_boxes.style.backgroundColor=""
    })
})

document.getElementById("continue_button").addEventListener("click",function(){window.location.href="./health_insurance4.html"})

// function select_city(){
let all_cities=document.querySelectorAll("#popular_cities div")
console.log(all_cities)

all_cities.forEach(e=>{
    e.addEventListener("click",function(){

        all_cities.forEach(e=>{
            e.style.backgroundColor="white"
        })

        if(e.style.backgroundColor==="white")
        {
        e.style.backgroundColor="orange"
        }
        else{
            e.style.backgroundColor="white"
        }
        document.getElementById("enter_city").value=e.innerText
        document.getElementById("enter_city").style.border="1px solid green"
        document.getElementById("required").innerText=""
    })
})
// }
function homepage(){
    window.location.href="../index.html"
}
