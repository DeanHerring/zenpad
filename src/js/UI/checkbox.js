const checkboxShowBorder = document.querySelector('#show_border');

let checkboxActive = localStorage.getItem('show_border') ? JSON.parse(localStorage.getItem('show_border')) : false;

checkboxShowBorder.addEventListener('click', () => {
  checkboxShowBorder.classList.toggle('bg-white-2');
  checkboxShowBorder.classList.toggle('bg-yellow-1');

  localStorage.setItem('show_border', !checkboxActive);
});

if (localStorage.getItem('show_border') && JSON.parse(localStorage.getItem('show_border')) === true) {
  checkboxShowBorder.classList.remove('bg-white-2');
  checkboxShowBorder.classList.add('bg-yellow-1');
}
