const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// Serach input click or blur
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');  
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');  
  searchInputEl.value = '';
});

// Badges scroll : lodash cdn https://cdnjs.com/libraries/lodash.js
// 일정시간에 한번씩만 호출되게 한다. _.throttle(함수, 시간ms)
// gsap cdn 애니메이션 gsap.to(요소, 지속시간, 옵션)
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {  
  if (window.scrollY > 500){
    //배지 숨기기 badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기 badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));//0.3초

// SECTION 시간차 이미지 나타나기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  })
});

//공지사항 스와이퍼 https://swiperjs.com/get-started#add-swiper-html-layout
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

//poromotion swiper.autoplay.start()
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', deault
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //5초에 한번씩 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
const promotionIconBtn = promotionToggleBtn.querySelector('.material-icons');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  
  if (isHidePromotion){
    // 숨김처리
    promotionIconBtn.textContent = 'download';
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionIconBtn.textContent = 'upload';
    promotionEl.classList.remove('hide');
  }
});
