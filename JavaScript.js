///Header scroll
// let nav =document.querySelector(".navbar");
// window.onscroll=function(){
//   if(document.documentElement.scrollTop >50){
//     nav.classList.add(".navbar.header-scrolled");
//   }else{
//     nav.classList.remove(".navbar.header-scrolled");
//   }
// }
///nav hide in mobile
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse");
navBar.forEach(function(a){
  a.addEventListener("click" ,function(){
    navCollapse.classList.remove("show");
  })
})


///Swiper Slider
var Swiper=new Swiper(".mySwiper",{
  direction :"vertical",
  loop:true,
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },
  autoplay:{
    delay:3500,
  },

});


/// Counter desing

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  counter("count1", 0, 1367, 3000);
  counter("count2", 100, 3452, 3000);
  counter("count3", 0, 6843, 3000);
  counter("count4", 0, 5634, 3000);
});

///Our Partner



//galaery


// ..........................

