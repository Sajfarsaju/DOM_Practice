// getElementById
let title = document.getElementById("head")
// console.log(title);

let paragrps = document.getElementsByClassName("parag")
// console.log(paragrps);

let paragrpss = document.getElementsByTagName("p")
// console.log(paragrpss);

let heading = document.querySelector("#head")
// console.log(heading);

let paragrpsElm = document.querySelector(".parag")
// console.log(paragrpsElm);

let paragrpsData = document.querySelector("p")
// console.log(paragrpsData);

let abc = document.querySelectorAll("p")

// Modifying elements
const div = document.querySelector("#box")
console.log(typeof div);

// InnerHTML
div.innerHTML = "<p>New Heading</p>"
// div.innerText = ""
// console.log(div.innerHTML);
// div.innerHTML += "<p>New Heading</p>"

// textContent
// title.textContent = "Welcome to DOM"

title.innerText = "Welcome to JS DOM"
// console.log(title.textContent, title.innerText);

// CSS
title.style.color = "blue"
title.style.textAlign = "center"


// const items =
//     document.querySelectorAll("li");

//     const fun = () => console.log("helo");
    

// items.forEach( (item) => {
//     item.textContent = item.textContent.toUpperCase();
// });


const ptag = document.createElement("p")
ptag.textContent = "New task"

const box2 =document.querySelector("#box2")
box2.appendChild(ptag)