const spark = document.querySelector(".sparks");

let stars = () => {
  let height = spark.offsetHeight - 100;
  let width = spark.offsetWidth - 200;

  let xPosition = Math.floor(Math.random() * width) + 1;
  let yPosition = Math.floor(Math.random() * height) + 1;

  let duration = Math.random() * 3;

  let element = document.createElement("div");
  spark.appendChild(element);
  element.classList.add("star");
  element.style.spark = duration;
  element.style.left = xPosition + "px";
  element.style.top = yPosition + "px";

  setTimeout(() => {
    spark.removeChild(element);
  }, 3000);
};

setInterval(stars, 200);
