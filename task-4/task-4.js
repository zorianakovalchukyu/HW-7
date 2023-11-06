const list = document.querySelector(".list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  list.remove(list.selectedIndex);
});
