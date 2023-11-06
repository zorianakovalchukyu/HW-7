const btn = document.querySelector(".btn");
const paragraph = document.querySelector(".text");

function changeCSS() {
  let styles = [
    "color: orange",
    'font-family: "Comic Sans MS"',
    "font-size: 20px",
  ];

  styles.forEach((style) => {
    const [property, value] = style.split(":");
    paragraph.style.setProperty(property.trim(), value.trim());
  });
}

btn.addEventListener("click", changeCSS);
