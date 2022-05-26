
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
       para.innerText="Required"
        document.getElementById("select_age").append(select,para)

        }
        else{
            e.style.backgroundColor=""
            document.getElementById("button").style.marginTop="-10px"
        }
        // all_boxes.style.backgroundColor=""
    })
})


