const image = document.querySelector(".image");
fetch("./images/AstroAbout.svg")
  .then((response) => response.text())
  .then((data) => {
    image.innerHTML = data; // Inject the SVG code into the div
  })
  .catch((error) => console.error("Error loading SVG:", error));
