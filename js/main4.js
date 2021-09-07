const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const badgeEl = document.querySelector('header .badges');

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