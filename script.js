// let countryinfo=[
//     {
//         Name: "India",
//         population: 1.3,
//         region: "Asia",
//         Flag : "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" ,
//         capital:"New Delhi",
//     },
//     {
//         Name: "China",
//         population: 1.4,
//         region: "Asia",
//         Flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png" ,
//         capital:"Beijing",
//     },
//     {
//         Name: "USA",
//         population: 3.2,
//         region: "North America",
//         Flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1024px-Flag_of_the_United_States_%28Pantone%29.svg.png" ,
//         capital:"Washington, D.C",
//     }
// ];


// //Create Element

// const container = document.createElement("div")
// const row=document.createElement("div")

// container.setAttribute("class","container-fluid")
// row.setAttribute("class","row")

// container.append(row);

// countryinfo.forEach((item)=>{
//     row.innerHTML+=`
//     <div class="col-sm-12 col-md-6 col-lg-3 d-flex  justify-container p-2">
//     <div class="main-container-card">
//     <div class="image-container">
//     <img src="${item.Flag}" alt="${item.Name}" class="flag w-100 h-100">
//     <p>${item.Name} is a beautiful country</p>
//     <h5>population : ${item.population}</h5>
//     </div>
//     `
// })


// document.body.append(container);

// let colors=["red","blue","orange","Green","Yellow","Indigo","Voilet"];

// let container=document.querySelector("#container")
// let h1=document.querySelector("h1")

// let clickedcolor=document.querySelector("#clickedcolor")

// colors.forEach((item)=>{
//     let box=document.createElement("div")
//     box.classList.add("box")
//     container.appendChild(box)
//     box.style.backgroundColor=item
//     box.addEventListener("click",function(){
//         h1.innerHTML="You have selected"
//         clickedcolor.innerHTML=item
//         clickedcolor.style.backgroundColor=item


//     })
// })




let button=document.getElementById("btn")

button.addEventListener("click",function(){
    let text=document.getElementById("txt").value;
    let leng=text.length
    console.log(leng)
    let outp=document.getElementById("output");
    outp.innerHTML=leng;
});

