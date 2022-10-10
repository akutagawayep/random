let box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  return (box.innerHTML = Math.floor(Math.random() * (600 - 100)) + 100);
});
