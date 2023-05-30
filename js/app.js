// const image = document.getElementById("js-image-movible-box");
// let image = false;
// const image2 = document.getElementById("js-image-movible-box-2");
// const imageHidden = document.getElementById("js-image-movible-hidden");
// const widthImage = image.offsetWidth;
// const widthImage2 = image.offsetWidth;
// const heightImage = image.offsetHeight;
// const heightImage2 = image2.offsetHeight;

// const boxEnd = document.getElementById("js-box-end");
// const boxEnd2 = document.getElementById("js-box-end-2");
// // boxEnd.style.opacity = '0';
// // boxEnd2.style.opacity = '0';
// const widthBox = boxEnd.offsetWidth;
// const heightBox = boxEnd.offsetHeight;
// const widthBox2 = boxEnd2.offsetWidth;
// const heightBox2 = boxEnd2.offsetHeight;


//console.log(image)

// if (image) {

//   window.addEventListener("scroll", () => {
//     const scrollTop = window.scrollTop || document.documentElement.scrollTop;

//     const rectBox = boxEnd.getBoundingClientRect();
//     const rectBox2 = boxEnd2.getBoundingClientRect();
//     const rectImage = imageHidden.getBoundingClientRect();
//     const boxDistanciaFromTop = rectBox.top + window.scrollY
//     const boxDistanciaFromTop2 = rectBox2.top + window.scrollY
//     const imgDistanciaFromTop = rectImage.top + window.scrollY
//     const imgDistanciaFromTop2 = rectImage.top + window.scrollY
//     // console.log(window.innerHeight)

//     const initPoint = imgDistanciaFromTop - (window.innerHeight / 2)
//     const initPoint2 = imgDistanciaFromTop2 - (window.innerHeight / 2)
//     const endPoint = boxDistanciaFromTop - (window.innerHeight / 2)
//     const endPoint2 = boxDistanciaFromTop2 - (window.innerHeight / 2)
//     const totalRecorrido = endPoint - initPoint
//     const totalRecorrido2 = endPoint2 - initPoint2
//     let movement = (scrollTop - initPoint)
//     let movement2 = (scrollTop - initPoint2)
//     let percent = movement * 100 / totalRecorrido
//     let percent2 = movement2 * 100 / totalRecorrido2

//     if (percent > 50) {
//       image.style.transform = `translateY(${movement}px) `;
//       image2.style.transform = `translateX(${movement2}px) `;
//     }

//     if (scrollTop > initPoint) {
//       image.style.opacity = '1'
//       image2.style.opacity = '1'

//       if (percent < 5) {
//         image.style.opacity = '0'
//         image2.style.opacity = '0'
//         image.style.transition = '0.3s opacity ease'
//         image2.style.transition = '0.3s opacity ease'
//       }
//       if (percent <= 20) {
//         image.style.borderRadius = `${percent}px`
//         image2.style.borderRadius = `${percent2}px`
//       }
//       if (percent <= 70) {
//         image.style.transform = `translateY(${movement}px) translateX(-${percent}vw) rotate3d(1,0,0,${percent}deg)`;
//         image2.style.transform = `translateY(${movement2}px) translateX(${percent2}vw) rotate3d(1,0,0,-${percent2}deg)`;
//       } else if (percent <= 98) {
//         image.style.transform = `translateY(${movement}px) translateX(-${100 - percent}vw)  rotate3d(0,0,1,${percent}deg)`;
//         image2.style.transform = `translateY(${movement2}px) translateX(${100 - percent2}vw)  rotate3d(0,0,1,-${percent2}deg)`;
//         image.style.maxWidth = `${widthImage}px`
//         image2.style.maxWidth = `${widthImage2}px`
//         image.style.maxHeight = `${heightImage}px`
//         image2.style.maxHeight = `${heightImage2}px`
//         boxEnd.style.opacity = '0'
//         boxEnd2.style.opacity = '0'
//         boxEnd.style.transition = '0.3s opacity ease-in-out'
//         boxEnd2.style.transition = '0.3s opacity ease-in-out'
//       } else {
//         // console.log('else')
//         image.style.width = `${widthBox}px`
//         image2.style.width = `${widthBox2}px`
//         image.style.maxWidth = `${widthBox}px`
//         image2.style.maxWidth = `${widthBox2}px`
//         image.style.maxHeight = `${heightBox}px`
//         image2.style.maxHeight = `${heightBox2}px`
//         image.style.transition = `0.5s max-width ease `
//         image2.style.transition = `0.5s max-width ease `
//         image.style.opacity = '0'
//         image.style.transition = '0.1s opacity ease-in-out'
//         image2.style.opacity = '0'
//         image2.style.transition = '0.1s opacity ease-in-out'
//         let heightImage = image.offsetHeight;
//         let heightImage2 = image2.offsetHeight;
//         image.style.transform = `translateY(${movement + (heightImage / 3)}px) translateX(-${100 - percent}vw)`;
//         image2.style.transform = `translateY(${movement2 + (heightImage2 / 3)}px) translateX(${110 - percent2}vw)`;

//         boxEnd.style.opacity = '1'
//         boxEnd2.style.opacity = '1'
//         boxEnd.style.transition = '0.5s opacity ease-in-out'
//         boxEnd2.style.transition = '1s opacity ease-in-out'

//       }
//       image.style.transform = `tr`
//       // console.log({percent})
//     } else {
//       image.style.opacity = '0'
//       image2.style.opacity = '0'
//     }
//     if (scrollTop >= endPoint) {
//       image.style.opacity = '0'
//       image2.style.opacity = '0'

//     }
//   })

//   const div = document.querySelector('.js-fade');
//   addFadeClass(div)
// }



function addFadeClass(div){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-fade');
      } else {
        entry.target.classList.remove('is-fade');
      }
    });
  });

  observer.observe(div, { rootMargin: '0px 0px 0px 0px', threshold: 0 });
}


function singleTab(){
  document.querySelectorAll('.rs-js-single-tab').forEach(e => {
    let item = e.getAttribute('data-item')
    e.addEventListener('click', function(ev){
      document.querySelectorAll('.rs-tabs-item').forEach(e => {
        e.classList.add('rs-hidden')
        e.classList.remove('rs-show')
      })
      document.querySelector(`div[data-item="${item}"].rs-tabs-item`).classList.add('rs-show');
      document.querySelector(`div[data-item="${item}"].rs-tabs-item`).classList.remove('rs-hidden');
    })
  })
}

document.addEventListener("DOMContentLoaded", (event) => {
  singleTab();

});

