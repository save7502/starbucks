// HEADER
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

// FOOTER
// year 
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();