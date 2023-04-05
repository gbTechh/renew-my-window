

const image = document.getElementById("js-image-movible-box");
const imageWidth = image.offsetWidth;
const distanciaAlTop = image.offsetTop;
console.log({ imageWidth })
const options = {
  rootMargin: '10px 20px 30px',
  threshold: 1.0
};

const observer = new IntersectionObserver(entries => {
  let scrollPixeles = 0
  let startPoint = 0
  let dis = 0
  const windowWidth = window.innerWidth;
  if (entries[0].isIntersecting) {
    console.log('El elemento está dentro de la vista');
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollTop || document.documentElement.scrollTop;
      scrollPixeles = scrollTop - startPoint;
      movementLeft = scrollTop - 300;
      console.log({ distanciaAlTop })
      console.log({ dis })
      console.log({ scrollTop })
      dis = distanciaAlTop - scrollTop
      console.log(dis >= (distanciaAlTop - 10))
      image.style.opacity = '1'
      if (dis >= (distanciaAlTop - 10)) {
        image.style.opacity = '0'
      }
      if ((scrollPixeles) > (windowWidth / 2)) {
        scrollPixeles = scrollPixeles
      }
      image.style.transform = `translateY(${scrollTop}px) translateX(-${scrollPixeles * 0.05}px) `;

    });

  } else {
    console.log('El elemento está fuera de la vista');
    image.style.transform = `translateY(${scroll}px)`;
    image.style.opacity = '0'
  }
}, options);

if (image) {
  observer.observe(image);
}






