const sliders = document.querySelectorAll('#mySlider');

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

sliders.forEach((slider) => {
  slider.addEventListener('input', () => {
    console.log('Uashdjbajhsd');
    slider.style.setProperty('--slider-value', slider.value);
  });
  slider.addEventListener('change', () => {
    if (slider.classList.contains('slider__paper-width')) {
      localStorage.setItem('paper_width', slider.value);
    }
    if (slider.classList.contains('slider__font-size')) {
      localStorage.setItem('font_size', slider.value);
    }
    if (slider.classList.contains('slider__volume-click')) {
      localStorage.setItem('volume_click', slider.value);
    }
  });

  slider.style.setProperty('--slider-value', slider.value);
});
