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




// let button=document.getElementById("btn")

// button.addEventListener("click",function(){
//     let text=document.getElementById("txt").value;
//     let leng=text.length
//     console.log(leng)
//     let outp=document.getElementById("output");
//     outp.innerHTML=leng;
// });

let employees=[
    {
      "firstname": "Romaine",
      "lastname": "Schmeler",
      "email": "Elroy_Tromp57@hotmail.com",
      "gender": "Female",
      "ipaddress": "173.246.38.117",
      "id": "1"
    },
    {
      "firstname": "Tess",
      "lastname": "McGlynn",
      "email": "Waino_Heller@hotmail.com",
      "gender": "Male",
      "ipaddress": "116.26.92.234",
      "id": "2"
    },
    {
      "firstname": "Monique",
      "lastname": "Schneider",
      "email": "Genesis_Glover81@gmail.com",
      "gender": "Female",
      "ipaddress": "163.109.255.154",
      "id": "3"
    },
    {
      "firstname": "Daisha",
      "lastname": "Batz",
      "email": "Joel_Hane1@gmail.com",
      "gender": "Female",
      "ipaddress": "183.213.128.23",
      "id": "4"
    },
    {
      "firstname": "Clinton",
      "lastname": "Weissnat",
      "email": "Lisa51@gmail.com",
      "gender": "Male",
      "ipaddress": "139.108.33.11",
      "id": "5"
    },
    {
      "firstname": "Alejandrin",
      "lastname": "Hodkiewicz",
      "email": "Belle.Crooks@yahoo.com",
      "gender": "Male",
      "ipaddress": "149.185.1.91",
      "id": "6"
    },
    {
      "firstname": "Jennie",
      "lastname": "Renner",
      "email": "Dariana5@gmail.com",
      "gender": "Female",
      "ipaddress": "235.33.238.247",
      "id": "7"
    },
    {
      "firstname": "Linnie",
      "lastname": "Huels",
      "email": "Lawrence_Schmeler@yahoo.com",
      "gender": "Male",
      "ipaddress": "251.115.10.226",
      "id": "8"
    },
    {
      "firstname": "Perry",
      "lastname": "Breitenberg",
      "email": "Edgar.Purdy@hotmail.com",
      "gender": "Female",
      "ipaddress": "37.75.180.191",
      "id": "9"
    },
    {
      "firstname": "Izabella",
      "lastname": "Marks",
      "email": "Sydney69@hotmail.com",
      "gender": "Female",
      "ipaddress": "210.12.48.19",
      "id": "10"
    },
    {
      "firstname": "Bethel",
      "lastname": "Hilpert",
      "email": "Rolando_Bosco41@hotmail.com",
      "gender": "Others",
      "ipaddress": "138.221.112.248",
      "id": "11"
    }
];


let displayemployees=document.querySelector("#all")

displayemployees.addEventListener("click", function(){
    displayall(employees)
});
let displayall=(employees)=>{
    let tablebody=document.querySelector("#table-body");
    let tablerow=""
    
    for(let employee of employees){
        //console.log(employee)

        tablerow+=`<tr>
        <td>${employee.id}</td>
        <td>${employee.firstname}</td>
        <td>${employee.lastname}</td>
        <td>${employee.email}</td>
        <td>${employee.gender}</td>
        <td>${employee.ipaddress}</td>
        </tr>`
    }
    tablebody.innerHTML=tablerow
};

let displaymen=document.querySelector("#male");

displaymen.addEventListener("click", function(){
    let maleemployee=employees.filter((employee)=>{
        return employee.gender=="Male"
    })
    displayall(maleemployee)
})

let displaywoman=document.querySelector("#female");

displaywoman.addEventListener("click", function(){
    let femaleemployee=employees.filter((employee)=>{
        return employee.gender=="Female"
    })
    displayall(femaleemployee)
});

let search=document.querySelector("#search-box")

search.addEventListener("keyup",function(){
    let textentered=search.value;
    //console.log(textentered)
    let filtered=[];
    if (textentered!=""){
        filtered=employees.filter((employee)=>{
            return employee.firstname.toUpperCase().includes(textentered.toUpperCase());

        })

    }
    displayall(filtered)
})