document.addEventListener("DOMContentLoaded", (event) => {

  fn();
});


function fn(){
  const dragElement = document.querySelector('.rs-btn-after-before')
  const container = document.querySelector('.rs-before-img');
  const widthDrag = dragElement.offsetWidth;
  const widthContainer = container.offsetWidth;
  const imageCrop = document.querySelector('.rs-after-img')
  
  let initPositionDrag = widthContainer - (widthDrag);
  let initPositionDrag2 = widthContainer;
  let isDragging = false;
  let dragOffsetX = 0;
  let dragStartX = 0;
  let totalPixelsMoved = (initPositionDrag / 2)
  let totalPixelsMovedWidhoutDrag = initPositionDrag2 / 2
  console.log({ totalPixelsMoved })
  dragElement.addEventListener('mousedown', startDragging);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDragging);

  function startDragging(event) {
    isDragging = true;
    dragStartX = event.clientX;
    dragOffsetX = event.clientX - dragElement.offsetLeft;
  }

  function drag(event) {
    if (isDragging) {
      const deltaX = event.clientX - dragStartX;
      
      totalPixelsMoved += deltaX;
      totalPixelsMovedWidhoutDrag += deltaX;
      dragStartX = event.clientX;
      let percent = totalPixelsMovedWidhoutDrag * 100 / widthContainer
      
      const direction = deltaX < 0 ? 'izquierda' : 'derecha';
      // const newLeft = event.clientX - container.offsetLeft - dragOffsetX;
      
      if (totalPixelsMoved < (widthContainer - (widthDrag / 2)) && totalPixelsMoved > -(widthDrag / 2)){
        dragElement.style.left = (totalPixelsMoved) + 'px';
        imageCrop.style.clipPath = `inset(0 ${100 - percent}% 0 0)`
      }
    }
  }

  function stopDragging() {
    isDragging = false;
  }

}