
function cover(){
 let data=document.getElementById("pop_up_display")
   // if(data.innerHTML===""){
  
  let get=document.getElementById("cover")


   let main_box=document.createElement("div")
   main_box.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  
   main_box.setAttribute("id","cover_box")

   let p1=document.createElement("p")
   p1.innerText=get.innerText
   p1.style.color="orange"

  let box1=document.createElement("div")
  let input1=document.createElement("input")
      input1.setAttribute("type","checkbox")
  let span1=document.createElement("span")
      span1.innerText="Recommended"

  box1.append(input1,span1)

  let box2=document.createElement("div")
  let input2=document.createElement("input")
      input2.setAttribute("type","checkbox")
   let span2=document.createElement("span")
     span2.innerText="Below 3 lakhs"
  
     box2.append(input2,span2)


     let box3=document.createElement("div")
     let input3=document.createElement("input")
     input3.setAttribute("type","checkbox")
   let span3=document.createElement("span")
     span3.innerText="3-4 Lakhs"

     box3.append(input3,span3)

     main_box.append(p1,box1,box2,box3)

     let divs=main_box.childNodes
     
     divs.forEach(e=>{
        let count=-1
        e.addEventListener("click",function(){
           count++
    let all_divs= main_box.childNodes
   //  console.log(all_divs.sub)
    all_divs.forEach(e=>{
   e.style.border="1px solid gray"
   e.style.color="black"
   // e.firstChild.checked="uncheck"
    })
       if(count%2===0){
         e.style.border="1px solid green"
         e.style.color="green"
         // e.input.style.boxShadow="green"
       }
       else{
          e.style.border="1px solid gray"
          e.style.color="black" 
       }

       
             console.log(e.innerText)
        })
     })
   
     
     let box_below_pop_up=document.createElement("div")
     box_below_pop_up.setAttribute("id","box_below_pop_up")
     let cancel=document.createElement("div")
     cancel.innerText="Cancel"
     cancel.addEventListener("click",function(){
        window.location.href="../html/filter_navbar.html"
     })
     let apply=document.createElement("div")
     apply.innerText="Apply"
     
     box_below_pop_up.append(apply,cancel)

  
     document.querySelector("#pop_up_display").append(main_box,box_below_pop_up)
   // }
   // else{
   //    document.getElementById("pop_up_display").innerHTML=""
   // }
   // let option4=document.createElement("option")
     
   // let option5=document.createElement("option")
}

function sort(){
   let data=document.getElementById("pop_up_display")
   // if(data.innerHTML===""){
  
  let get=document.getElementById("sort")


   let main_box=document.createElement("div")
   main_box.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  
   main_box.setAttribute("id","cover_box")
   main_box.style.marginLeft="30%"

   let p1=document.createElement("p")
   p1.innerText=get.innerText
   p1.style.color="orange"

  let box1=document.createElement("div")
  let input1=document.createElement("input")
      input1.setAttribute("type","checkbox")
  let span1=document.createElement("span")
      span1.innerText="By relevance"

  box1.append(input1,span1)

  let box2=document.createElement("div")
  let input2=document.createElement("input")
      input2.setAttribute("type","checkbox")
   let span2=document.createElement("span")
     span2.innerText="Premium low to high"
  
     box2.append(input2,span2)


     let box3=document.createElement("div")
     let input3=document.createElement("input")
     input3.setAttribute("type","checkbox")
   let span3=document.createElement("span")
     span3.innerText="Cashless hospital network"

     box3.append(input3,span3)

     main_box.append(p1,box1,box2,box3)

     let divs=main_box.childNodes
     
     divs.forEach(e=>{
        let count=-1
        e.addEventListener("click",function(){
           count++
    let all_divs= main_box.childNodes
   //  console.log(all_divs.sub)
    all_divs.forEach(e=>{
   e.style.border="1px solid gray"
   e.style.color="black"
   // e.firstChild.checked="uncheck"
    })
       if(count%2===0){
         e.style.border="1px solid green"
         e.style.color="green"
         // e.input.style.boxShadow="green"
       }
       else{
          e.style.border="1px solid gray"
          e.style.color="black" 
       }

       
             console.log(e.innerText)
        })
     })
   
     
     let box_below_pop_up=document.createElement("div")
     box_below_pop_up.setAttribute("id","box_below_pop_up")
     box_below_pop_up.style.marginLeft="30%"
     let cancel=document.createElement("div")
     cancel.innerText="Cancel"
     cancel.addEventListener("click",function(){
        window.location.href="../html/filter_navbar.html"
     })
     let apply=document.createElement("div")
     apply.innerText="Apply"
     
     box_below_pop_up.append(apply,cancel)

  
     document.querySelector("#pop_up_display").append(main_box,box_below_pop_up)
   // }
   // else{
   //    document.getElementById("pop_up_display").innerHTML=""
   // }
}

function plan_type(){
   let data=document.getElementById("pop_up_display")
   // if(data.innerHTML===""){
  
  let get=document.getElementById("plan_type")


   let main_box=document.createElement("div")
   main_box.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  
   main_box.setAttribute("id","cover_box")
   main_box.style.marginLeft="60%"

   let p1=document.createElement("p")
   p1.innerText=get.innerText
   p1.style.color="orange"

  let box1=document.createElement("div")
  let input1=document.createElement("input")
      input1.setAttribute("type","checkbox")
  let span1=document.createElement("span")
      span1.innerText="Base plan"

  box1.append(input1,span1)

  let box2=document.createElement("div")
  let input2=document.createElement("input")
      input2.setAttribute("type","checkbox")
   let span2=document.createElement("span")
     span2.innerText="1cr cover"
  
     box2.append(input2,span2)


     let box3=document.createElement("div")
     let input3=document.createElement("input")
     input3.setAttribute("type","checkbox")
   let span3=document.createElement("span")
     span3.innerText="Arogya Sanjeevni"

     box3.append(input3,span3)

     main_box.append(p1,box1,box2,box3)

     let divs=main_box.childNodes
     
     divs.forEach(e=>{
        let count=-1
        e.addEventListener("click",function(){
           count++
    let all_divs= main_box.childNodes
   //  console.log(all_divs.sub)
    all_divs.forEach(e=>{
   e.style.border="1px solid gray"
   e.style.color="black"
   // e.firstChild.checked="uncheck"
    })
       if(count%2===0){
         e.style.border="1px solid green"
         e.style.color="green"
         // e.input.style.boxShadow="green"
       }
       else{
          e.style.border="1px solid gray"
          e.style.color="black" 
       }

       
             console.log(e.innerText)
        })
     })
   
     
     let box_below_pop_up=document.createElement("div")
     box_below_pop_up.setAttribute("id","box_below_pop_up")
     box_below_pop_up.style.marginLeft="60%"
     let cancel=document.createElement("div")
     cancel.innerText="Cancel"
     cancel.addEventListener("click",function(){
        window.location.href="../html/filter_navbar.html"
     })
     let apply=document.createElement("div")
     apply.innerText="Apply"
     
     box_below_pop_up.append(apply,cancel)

  
     document.querySelector("#pop_up_display").append(main_box,box_below_pop_up)
   
   // else{
   //    document.getElementById("pop_up_display").innerHTML=""
   // }
}