let fetchedData;

document.getElementById("cover").addEventListener("click", () => {
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

const getData = async () => {
    let url = "http://localhost:3000/viewPlans";
    try {
        let response = await fetch(url);
        response = await response.json();
        fetchedData = response;
        displayData(response);
    } catch (error) {
        console.log(error)
    }
}

const displayData = (data) => {
    let mainContainer = document.getElementById("dataWrapper");
    let container = document.getElementsByClassName("leftData")[0];
    container.innerHTML = "";
    // console.log(container)

    data.forEach((item) => {
        let dataCardWrapper = document.createElement("div");
        dataCardWrapper.setAttribute("class", "dataCardWrapper");

        let leftDataContainer = document.createElement("div");
        leftDataContainer.setAttribute("class", "leftDataContainer");

        let img = document.createElement("img");
        img.setAttribute("class", "displayImage");
        img.src = item.img;

        let morePlans = document.createElement("span");
        morePlans.setAttribute("classs", "morePlans");
        morePlans.innerHTML = "11 more plans";

        leftDataContainer.appendChild(img);
        leftDataContainer.appendChild(morePlans);


        let rightDataContainer = document.createElement("div");
        rightDataContainer.setAttribute("class", "rightDataContainer");

        let detailContainer = document.createElement("div");
        detailContainer.setAttribute("class", "detailContainer");

        let rightHeading = document.createElement("header");
        rightHeading.setAttribute("class", "rightHeading");
        rightHeading.innerHTML = item.header;
        detailContainer.appendChild(rightHeading);

        let detail1 = document.createElement("p");
        detail1.setAttribute("class", "detail1");
        detail1.innerHTML = item.p1;
        detailContainer.appendChild(detail1);

        let detail2 = document.createElement("p");
        detail2.setAttribute("class", "detail2");
        detail2.innerHTML = item.p2;
        detailContainer.appendChild(detail2);

        let detail3 = document.createElement("p");
        detail3.setAttribute("class", "detail3");
        detail3.innerHTML = item.p3;
        detailContainer.appendChild(detail3);

        let detail4 = document.createElement("p");
        detail4.setAttribute("class", "viewFeatures");
        detail4.innerHTML = item.p4;
        detailContainer.appendChild(detail4);

        let div1 = document.createElement("div");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "dot");
        let span2 = document.createElement("span");
        span2.innerHTML = "Add to Compare";
        div1.appendChild(span1);
        div1.appendChild(span2);
        detailContainer.appendChild(div1);

        rightDataContainer.appendChild(detailContainer);

        let premiumWrapper = document.createElement("premiumWrapper");
        premiumWrapper.setAttribute("class", "premiumWrapper");

        let premiumContainer = document.createElement("div");
        premiumContainer.setAttribute("class", "premiumContainer");

        let coveramount = document.createElement("div");
        coveramount.setAttribute("class", "coveramount");
        let p1 = document.createElement("p");
        p1.innerHTML = "Cover Amount";
        coveramount.appendChild(p1);
        let p2 = document.createElement("p");
        p2.setAttribute("class", "totalCover");
        p2.innerHTML = item.cover;
        coveramount.appendChild(p2);
        premiumContainer.appendChild(coveramount);


        let premiumDiv = document.createElement("div");
        premiumDiv.setAttribute("class", "premiumDiv")
        let p3 = document.createElement("p");
        p3.innerHTML = "Premium";
        premiumDiv.appendChild(p3)
        let p4 = document.createElement("p");
        p4.setAttribute("class", "perMonth");
        p4.innerHTML = item.premium.monthly;
        premiumDiv.appendChild(p4);
        let p5 = document.createElement("p");
        p5.setAttribute("class", "perYear");
        p5.innerHTML = item.premium.yearly;
        premiumDiv.appendChild(p5);
        premiumContainer.appendChild(premiumDiv);
        premiumWrapper.appendChild(premiumContainer);

        let shortlistButton = document.createElement("button");
        shortlistButton.setAttribute("class", "shortlist");
        shortlistButton.innerHTML = "Add to shortlist";
        premiumWrapper.appendChild(shortlistButton);

        let buynowButton = document.createElement("button");
        buynowButton.setAttribute("class", "buynow");
        buynowButton.innerHTML = "Buy now";
        buynowButton.addEventListener("click", function(){
            redirect();
        })
        premiumWrapper.appendChild(buynowButton);
        rightDataContainer.appendChild(premiumWrapper);

        dataCardWrapper.appendChild(leftDataContainer);
        dataCardWrapper.appendChild(rightDataContainer);

        container.appendChild(dataCardWrapper);
        mainContainer.appendChild(container);

    })

}
getData();

const redirect = () => {
    window.location.href = "./payment.html"
}
const filterRate = (e) => { 
    let modal = document.getElementById("modal");
    modal.classList.remove("active");
    let popup = document.getElementById("sortDisplay");
    popup.classList.remove("active");
    if (e.target.id == "onecrore" || "1crore") {
        let data = fetchedData.filter((item) => {
            return item.price >= 100;
        })
        displayData(data);
    }
    if (e.target.id == "fivelakh") {
        let data = fetchedData.filter((item) => {
            return item.price <= 5;
        })
        displayData(data);
    }
    if (e.target.id == "noRoomLimit") {
        let data = fetchedData.filter((item) => {
            return item.p1 == "No Room Rent Limit";
        })
        displayData(data);
    }

}

document.getElementById("sortDisplay").addEventListener("click", filterRate);
document.getElementById("noRoomLimit").addEventListener("click", filterRate);
document.getElementById("1crore").addEventListener("click", filterRate);

