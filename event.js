const btn1 = document.querySelector("#btn1")
const title = document.querySelector("#title")
btn1.addEventListener("click", (event) => {
    // alert("Clicked...")
    title.textContent = "Welcome to Events"
    title.style.color = "darkblue"
    // console.log(event.target);
})

const form1 = document.querySelector("#form1")
// const inp = document.querySelector("#inp1")
// console.log(inp);

form1.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const name = document.querySelector("#inp1").value

    if (name === "") {
        alert("Name is required...")
    } else {
        alert("Success...")
    }
})


// document.addEventListener("keyup", e => {
//         console.log(e.key);
//     }
// );

let inpt = document.querySelector("#srch")
inpt.addEventListener("input", (ev) => {
    console.log(ev.target.value);
})

const mouseDiv = document.querySelector("#mousev")

mouseDiv.addEventListener("mouseenter",(ev)=>{
    mouseDiv.style.backgroundColor = "lightpink"
})

mouseDiv.addEventListener("mouseleave",(ev)=>{
    mouseDiv.style.backgroundColor = "lightblue"
})

// mouseDiv.addEventListener("mousemove",(e)=>{
//     // console.log("Working...");
//     mouseDiv.style.backgroundColor = "red"
//     console.log(e.clientX, e.clientY);
// })

const h1 = document.querySelector(".dummytxt")

// For success
document.querySelector("#success").addEventListener("click",()=>{
    h1.classList.remove("dummytxt")
    h1.classList.remove("addFailure")
    h1.classList.add("addSuccess")
})

// For success
document.querySelector("#failed").addEventListener("click",()=>{
    h1.classList.remove("dummytxt")
    h1.classList.remove("addSuccess")
    h1.classList.add("addFailure")
})