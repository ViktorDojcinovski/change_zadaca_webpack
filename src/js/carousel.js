let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const pagination = document.getElementById("pagination");

function Carousel(mountingElement) {
  this.mountingElement = mountingElement;
}

function showSlide(index) {
  // recalculate the currentSlide
  // move the carousel to the currentSlide
  currentSlide = (index + totalSlides) % totalSlides; // 1
  carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
  updatePagination();
}

function changeSlide(direction) {
  // get the currentSlide value and add the direction to it
  // assign that to a local variable called index
  // call showSlide with index
  let index = currentSlide + direction;
  showSlide(index);
}

function updatePagination() {
  pagination.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(i));
    if (i === currentSlide) dot.classList.add("active");
    pagination.appendChild(dot);
  }
}

Carousel.prototype.init = function () {
  // Add event listeners to the buttons
  nextBtn.addEventListener("click", function () {
    changeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    changeSlide(-1);
  });
  // Initialize the pagination
  updatePagination();
};

// export default Carosuel;
export { Carousel };
