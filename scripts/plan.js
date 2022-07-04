import navbar from "../components/productnavbar.js";

var nav=document.querySelector(".nav");

nav.innerHTML=navbar();

document.getElementById("mainpage").addEventListener("click",function(){
    window.location.href="../index.html";
});


var container=document.getElementById("plan");



async function fetchData(){

    try {
        let res= await fetch(`http://localhost:3000/plan`);

        let data =await res.json();

        displayData(data);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
fetchData();


async function displayData(data){
    container.innerHTML="";
    data.forEach(data => {
        
        var box=document.createElement("div");

        var minibox1=document.createElement("div");

        var img=document.createElement("img");
        img.src=data.image;

        minibox1.append(img);

        var minibox2=document.createElement("div");
        var lifeCover=document.createElement("span");
        lifeCover.innerText=data.lifeCover +"Lac";

        minibox2.append(lifeCover);

        var minibox3=document.createElement("div");
        var CovertillAge=document.createElement("span");
        CovertillAge.innerText=data.CovertillAge +"yrs";
        var maxLimit=document.createElement("p");
        maxLimit.innerText="Max Limit: 70 yrs";

        minibox3.append(CovertillAge,maxLimit);


        var minibox4=document.createElement("div");
        var claimSetteld=document.createElement("span");
        claimSetteld.innerText=data.claimSetteld + "%";
        minibox4.append(claimSetteld);



        var minibox5=document.createElement("div");
        var Button=document.createElement("button");
        Button.innerText=data.price+" >";

        minibox5.append(Button);

        Button.onclick=async function(){
            window.location.href="./pages/payment.html";
        }

        box.append(minibox1,minibox2,minibox3,minibox4,minibox5);

        container.append(box);
    });
}