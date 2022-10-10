let box = document.querySelector(".box");

const num1=document.querySelector(".num1")
const num2=document.querySelector(".num2")

const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
  return (box.innerHTML = Math.floor(Math.random() * (`${num1.value}` - `${num2.value}`)) );
});


