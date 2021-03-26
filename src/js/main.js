const prevBtn = document.querySelector("#slider-prev-btn");
const nextBtn = document.querySelector("#slider-next-btn");
const sliderFrame = document.querySelector("#slider-frame");

prevBtn.addEventListener("click", () => {
  sliderFrame.style.transform = `translateX(0)`;
});

nextBtn.addEventListener("click", () => {
  sliderFrame.style.transform = `translateX(-100%)`;
});
