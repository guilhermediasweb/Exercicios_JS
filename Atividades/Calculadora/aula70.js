const teclasNum=[...document.querySelectorAll(".num")]
const teclasop=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector("#tigual")

const display=document.querySelector(".display")

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

teclasop.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})