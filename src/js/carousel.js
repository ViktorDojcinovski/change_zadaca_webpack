let currentSlide = 0;

function SimpleCarousel(mountingElement) {
  this.mountingElement = mountingElement;
  this.totalSlides = this.mountingElement.querySelectorAll(".slide").length;
}

function Carousel(mountingElement, fullWidth = true) {
  SimpleCarousel.call(this, mountingElement);
  this.fullWidth = fullWidth;
}

Carousel.prototype.showSlide = function (index) {
  // recalculate the currentSlide
  // move the carousel to the currentSlide
  currentSlide = (index + this.totalSlides) % this.totalSlides; // 1
  this.mountingElement.style.transform = `translateX(${-currentSlide * 100}%)`;
  this.updatePagination();
};

Carousel.prototype.changeSlide = function (direction) {
  // get the currentSlide value and add the direction to it
  // assign that to a local variable called index
  // call showSlide with index
  let index = currentSlide + direction;
  this.showSlide(index);
};

Carousel.prototype.updatePagination = function () {
  this.pagination.innerHTML = "";
  if (this.fullWidth) {
    this.mountingElement.parentElement.classList.add("alteringClass");
  }

  for (let i = 0; i < this.totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => this.showSlide(i));
    if (i === currentSlide) dot.classList.add("active");
    this.pagination.appendChild(dot);
  }
};

Carousel.prototype.createDOMElements = function () {
  const parent = this.mountingElement.parentElement;
  // Create DOM elements
  this.nextBtn = document.createElement("button");
  this.prevBtn = document.createElement("button");
  this.pagination = document.createElement("div");

  // Add classes to the DOM elements
  this.nextBtn.classList.add("btn", "nextBtn");
  this.prevBtn.classList.add("btn", "prevBtn");
  this.pagination.classList.add("pagination");

  // Add text to the buttons
  this.nextBtn.innerText = "Next";
  this.prevBtn.innerText = "Previous";

  // Append the buttons to the mounting element
  parent.appendChild(this.nextBtn);
  parent.appendChild(this.prevBtn);
  parent.appendChild(this.pagination);
};

Carousel.prototype.init = function () {
  // Create DOM elements
  this.createDOMElements();

  // Add event listeners to the buttons
  this.nextBtn.addEventListener("click", () => {
    this.changeSlide(1);
  });
  this.prevBtn.addEventListener("click", () => {
    this.changeSlide(-1);
  });
  // Initialize the pagination
  this.updatePagination();
};

// export default Carosuel;
export { Carousel };
