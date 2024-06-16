function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
  }
  
  const ele1 = document.getElementById("ele1");
  
  
  pintar(ele1);
  
  ele1.addEventListener("click", function () {
    pintar(this, 'yellow'); 
  });
  
 