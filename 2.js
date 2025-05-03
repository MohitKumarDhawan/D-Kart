var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const profile = document.querySelector('.profile');

  profile.addEventListener('click', function (e) {
      e.stopPropagation(); 
      this.classList.toggle('active');
  });

  window.addEventListener('click', function () {
      profile.classList.remove('active');
  });
 