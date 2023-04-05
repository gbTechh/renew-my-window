

const image = document.getElementById("js-image-movible-box");
const imageHidden = document.getElementById("js-image-movible-hidden");

const boxEnd = document.getElementById("js-box-end");
const widthBox = boxEnd.offsetWidth;
const heightBox = boxEnd.offsetHeight;
console.log({heightBox});

// console.log(image)

if (image) {
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;
  // console.log(imageHeight)0px 20px 30px

  // const boxDistanciaFromTop = boxEnd.getBoundingClientRect().top;
  const distanciaImgFromTop = image.offsetTop + imageHeight;
  console.log(boxEnd.getBoundingClientRect())
  // console.log({ imageWidth })
  const options = {
    rootMargin: '0px',
    threshold: 1.0
  };

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollTop || document.documentElement.scrollTop;

    const rectBox = boxEnd.getBoundingClientRect();
    const rectImage = imageHidden.getBoundingClientRect();
    const boxDistanciaFromTop = rectBox.top + window.scrollY
    const imgDistanciaFromTop = rectImage.top + window.scrollY
    // console.log(window.innerHeight)

    const initPoint = imgDistanciaFromTop - (window.innerHeight / 2)
    const endPoint = boxDistanciaFromTop - (window.innerHeight / 2)
    const totalRecorrido = endPoint - initPoint
    let movement = (scrollTop - initPoint)
    let percent = movement * 100 / totalRecorrido
    // console.log({percent})
    if(percent > 50){
      image.style.trasnform = `translateX(${movement}px) `;
    }

    if(scrollTop > initPoint){
      image.style.opacity = '1'
      
      if(percent <= 20){
        image.style.borderRadius = `${percent}px`
      }
      if(percent <= 70){
        console.log({percent})
        image.style.transform = `translateY(${movement}px) translateX(-${percent}vw) rotate3d(1,0,0,${percent}deg)`;
      }else if(percent <= 90){
        image.style.transform = `translateY(${movement}px) translateX(-${100 - percent}vw)  rotate3d(0,0,1,${percent}deg)`;
      }else{
        image.style.transform = `translateY(${movement}px) translateX(-${100 - percent}vw)`;
        image.style.width = `${widthBox}px`
        image.style.trasnsition = `0.5s width ease-in`
      }
      // image.style.transform = `tr`
      // console.log({percent})
    }else{
      image.style.oapcity = '0'
    }
    if(scrollTop >= endPoint) {
      image.style.opacity = '0'
      console.log('end')
    }
    // console.log({scrollTop})
  })
 

  // const observer = new IntersectionObserver(entries => {
  //   let scrollPixeles = 0
  //   let startPoint = imageHeight
  //   let dis = 0
  //   const windowWidth = window.innerWidth;
    

  //   // window.addEventListener("scroll", () => {
  //   //   let distanciaTotalARecorrer = boxDistanciaFromTop - distanciaImgFromTop;
  //   //   // console.log({distanciaTotalARecorrer})
  //   //   // console.log({boxDistanciaFromTop})
  //   //   const scrollTop = window.scrollTop || document.documentElement.scrollTop;
  //   //   // console.log(scrollTop)
  //   // },{once:true})

  //   if (entries[0].isIntersecting) {
  //     console.log('El elemento está dentro de la vista');
      
  //     // window.addEventListener("scroll", () => {
  //     //   const scrollTop = window.scrollTop || document.documentElement.scrollTop;
  //     //   scrollPixeles = scrollTop - startPoint;
  //     //   movementLeft = scrollTop - 300;
  //     //   // console.log({ distanciaAlTop })
  //     //   // console.log({ dis })
  //     //   // console.log({ scrollTop })
  //     //   dis = distanciaAlTop - scrollTop
  //     //   // console.log(dis >= (distanciaAlTop - 10))
  //     //   image.style.opacity = '1'
  //     //   if (dis >= (distanciaAlTop - 10)) {
  //     //     image.style.opacity = '0'
  //     //   }
  //     //   if ((scrollPixeles) > (windowWidth / 2)) {
  //     //     scrollPixeles = scrollPixeles
  //     //   }
  //     //   image.style.transform = `translateY(${scrollTop}px) translateX(-${scrollPixeles * 0.05}px) `;

  //     // });

  //   } else {
  //     console.log('El elemento está fuera de la vista');
  //     image.style.transform = `translateY(${scroll}px)`;
  //     image.style.opacity = '0'
  //   }
  // }, options);

  // if (image) {
  //   observer.observe(image);
  // }

}





