 let number=0;

const button = document.querySelector("#button");
const button1 = document.querySelector("#button1");
const display = document.querySelector("#display");

button.addEventListener("click",()=>{
    number++;
    display.textContent = number;

});
button1.addEventListener("click",()=>{
    number--;
    display.textContent = number;

})