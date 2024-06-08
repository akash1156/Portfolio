// navbar js 
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing text animation script
    
    var typed = new Typed('#element', {
      strings: ['Frontend Developer', 'Developer', 'Web Developer'],
      typeSpeed:100,
      backSpeed:100,
      backDelay:1000,
      loop: true
    });

    document.addEventListener('DOMContentLoaded', () => {
      const workList = document.querySelector('.work-list');
      const workItems = document.querySelectorAll('.work');
      const buttonLeft = document.querySelector('.nav-button.left');
      const buttonRight = document.querySelector('.nav-button.right');
  
      let currentIndex = 0;
      const visibleItems = 3;
      const totalItems = workItems.length;
  
      buttonLeft.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex--;
              updateWorkListPosition();
          }
      });
  
      buttonRight.addEventListener('click', () => {
          if (currentIndex < totalItems - visibleItems) {
              currentIndex++;
              updateWorkListPosition();
          }
      });
  
      function updateWorkListPosition() {
          const offset = currentIndex * (workItems[0].offsetWidth + parseInt(getComputedStyle(workItems[0]).marginRight));
          workList.style.transform = `translateX(-${offset}px)`;
      }
  });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
var typed= new typed(".home-hero__content__text",{
  Strings:["Frontend Developer" , "Youtuber" , "Web Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true
});
