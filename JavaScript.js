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
var swiper = new Swiper(".swiper-wrapper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
  delay :2000,
  },
  breakpoints: {
  '991': {
  slidesPerView: 3,
  spaceBetween: 10,
  },
  '767': {
  slidesPerView: 2,
  spaceBetween:10,
  },
  '320': {
  slidesPerView: 2,
  spaceBetween: 8,
  }
},
});

// contect section
// Basic form validation can be added here
document.querySelector('form').onsubmit = function(e) {
  if (!document.querySelector('#fname').value.trim()) {
    alert('First name is required.');
    e.preventDefault();
  }
  // Add more validation as needed
};
// contect section exit

// Popup js
function showPopup() {
  setTimeout(() => {
      document.getElementById("myPopup").style.display = "block";
  }, 3000); // Show after 3 seconds
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

window.onload = showPopup();
//Popup js exit

          // Login js
          function openForm() {
            document.getElementById("myForm").style.display = "block";
          }
          
          function closeForm() {
            document.getElementById("myForm").style.display = "none";
          }
          // Login js exit
                    // Summit function js
 const submitBtn = document.getElementById('submit')
 const closeBtn = document.getElementById('close')
 const popup = document.querySelector('.popupContainer')
 
 submitBtn.addEventListener('click', function () {
     popup.classList.add('popupActive')
 
 })
 closeBtn.addEventListener('click', function () {
     popup.classList.remove('popupActive')
 
 })
 // summit function js


// ..........................

