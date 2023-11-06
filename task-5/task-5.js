const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

btn.addEventListener("click", displayMessage("I was pressed!"));
btn.addEventListener("mouseenter", displayMessage("Mouse on me!"));
btn.addEventListener("mouseleave", displayMessage("Mouse is not on me!"));

function displayMessage(message) {
  return () => {
    outBlock.innerHTML += `${message} <br>`;
  };
}
