
document.addEventListener("DOMContentLoaded", (event) => {

  slider();
});


function slider() {
  
  const thumbnails = document.querySelectorAll(".rs-thumbnail");
  const wrappThumbnails = document.querySelector(".rs-slider-thumbnails");
  const nextButton = document.querySelector(".rs-slider-next-button");
  const prevButton = document.querySelector(".rs-slider-prev-button");

  let currentIndex = 0;
  let translate = 0;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      currentIndex = index;     
      changeImage();
    });
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    changeImage();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    changeImage('next');
  });

  function changeImage(direction) {
    const mainImage = document.querySelector(".rs-slider-main img");

    thumbnails.forEach((thumbnail, index) => {
      widthThumbnail = thumbnail.getBoundingClientRect().width      
      
      if (index === currentIndex) {
        direction === 'next' ? translate = -currentIndex * widthThumbnail : translate = -currentIndex * widthThumbnail 
        
        thumbnail.classList.add("rs-slider-active");
        
        wrappThumbnails.style.transform = `translateX(${translate}px)`
      } else {
        thumbnail.classList.remove("rs-slider-active");
      }
    });

    mainImage.src = thumbnails[currentIndex].querySelector("img").src;
    mainImage.alt = thumbnails[currentIndex].querySelector("img").alt;
  }
}
