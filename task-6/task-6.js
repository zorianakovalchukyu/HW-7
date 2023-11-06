const size = document.querySelector(".size");

function updateWindowSize() {
  size.innerHTML = `Window size: ${window.innerHeight}x${window.innerWidth}`;
}

updateWindowSize();
addEventListener("resize", updateWindowSize);
