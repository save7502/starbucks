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

/* Toggle up down Btn
const toggleupBtn = document.querySelector('section .toggle-promotion .up');
const toggledownBtn = document.querySelector('section .toggle-promotion .down');

toggleupBtn.addEventListener('click', function(){
  if (this.style.display == 'block'){
    console.log('hi');
    this.style.display = 'none';
    toggledownBtn.style.display = 'block';
  }
});
toggledownBtn.addEventListener('click', function(){
  if (this.style.display == 'block'){
    this.style.display = 'none';
    toggleupBtn.style.display = 'block';
  }
});
*/

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