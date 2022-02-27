'use strict'
window.addEventListener('load', posElem, false);

  function posElem(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    var elemArr=document.getElementsByTagName('img');
    var positionX;
    var positionY;

    for (var i = elemArr.length - 1; i >= 0; i--){
      var elem=elemArr[i];
      elem.style.top = elem.offsetTop + 'px';
      elem.style.left = elem.offsetLeft + 'px';    
      elem.onmousedown=mouseDown
      elem.onmouseup = mouseUp;
    }
    for (i = elemArr.length - 1; i >= 0; i--){
      var elem=elemArr[i];
      elem.style.position='absolute' 
    }

    function mouseDown(EO) { 

      EO = EO || window.event;
      EO.preventDefault();
      var bod = document.body;
      var image = EO.target;
      bod.appendChild(image);  
    //eo.x - координата х для курсора
      //ео.target.offsetTop/Left - координаты объекта, который инициировал событие
      positionX = EO.x - EO.target.offsetLeft;
      positionY = EO.y - EO.target.offsetTop;
      console.log(EO.y, EO.target.offsetTop, positionY)
     
      function mouseMove(EO) {
        EO = EO || window.event;
        EO.preventDefault();  
        image.style.left = (EO.x - positionX) + 'px';
        image.style.top = (EO.y - positionY) + 'px';
        image.style.cursor = "pointer";
      }
       
        window.onmousemove = mouseMove;
    }  
 
    function mouseUp(EO) {
      EO = EO || window.event;
      EO.preventDefault();
      window.onmousemove = null;
     
    } 
  
}

