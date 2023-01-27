
// Scroll To Top // 
let up = document.querySelector('.top');

window.onscroll = function (){
  if(this.scrollY >= 1000){
    up.classList.add("show");
  }else{
    up.classList.remove("show");
  }
}

up.onclick = function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}