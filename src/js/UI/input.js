const sliders = document.querySelectorAll('#mySlider');
const paperWidth = document.querySelector('.paper_width');
const fontSize = document.querySelector('.font_size');
const volumeClick = document.querySelector('.volume_click');
const wallpaper = document.querySelector('.wallpaper');

const setSliderValue = (storageID, sliderClass) => {
  sliders.forEach((slider) => {
    if (localStorage.getItem(storageID) && slider.classList.contains(sliderClass)) {
      slider.value = localStorage.getItem(storageID);
    }
  });
};

setSliderValue('paper_width', 'slider__paper-width');
setSliderValue('font_size', 'slider__font-size');
setSliderValue('volume_click', 'slider__volume-click');
setSliderValue('background_blur', 'slider__background-blur');
setSliderValue('background_brightness', 'slider__background-brightness');

sliders.forEach((slider) => {
  slider.addEventListener('input', () => {
    slider.style.setProperty('--slider-value', slider.value);
  });
  slider.addEventListener('change', () => {
    if (slider.classList.contains('slider__paper-width')) {
      localStorage.setItem('paper_width', slider.value);
      paperWidth.innerText = `(${slider.value}%)`;
    }
    if (slider.classList.contains('slider__font-size')) {
      localStorage.setItem('font_size', slider.value);
    }
    if (slider.classList.contains('slider__volume-click')) {
      localStorage.setItem('volume_click', slider.value);
    }
    if (slider.classList.contains('slider__background-blur')) {
      localStorage.setItem('background_blur', slider.value);
      console.log(slider.value);
      wallpaper.style.backdropFilter = `blur(${slider.value}px)`;
    }
    if (slider.classList.contains('slider__background-brightness')) {
      localStorage.setItem('background_brightness', slider.value);
      wallpaper.style.filter = `brightness(${slider.value}%)`;
    }
  });

  slider.style.setProperty('--slider-value', slider.value);
});
