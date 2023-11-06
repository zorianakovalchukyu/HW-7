const btnClick = document.querySelector(".btn-click");
const btnDoubleClick = document.querySelector(".btn-double-click");
const btnClickHold = document.querySelector(".btn-click-hold");
const hoverLink = document.querySelector(".hover-link");

btnClick.addEventListener("click", function () {
  document.body.style.backgroundColor = "#94C5FF";
});

btnDoubleClick.addEventListener("dblclick", () => {
  console.log("double click");
  document.body.style.backgroundColor = "#FF94FB";
});

btnClickHold.addEventListener("mousedown", function () {
  document.body.style.backgroundColor = "#5D4343";
});

btnClickHold.addEventListener("mouseup", function () {
  document.body.style.backgroundColor = "#FFFFFF";
});

hoverLink.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "#F6F952";
});
hoverLink.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "#FFFFFF";
});
