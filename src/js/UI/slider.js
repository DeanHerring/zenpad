const swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
});

const images = [
  'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const slides = document.querySelectorAll('.slider_background');
const wallapaper = document.querySelector('.wallpaper');

wallapaper.style.backgroundImage = localStorage.getItem('background_image')
  ? `url(${images[parseInt(localStorage.getItem('background_image'))]})`
  : `url(${images[0]})`;

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    slides.forEach((slide) => slide.classList.remove('active'));
    slide.classList.toggle('active');

    localStorage.setItem('background_image', index);
    wallapaper.style.backgroundImage = `url(${images[index]})`;
  });
});
