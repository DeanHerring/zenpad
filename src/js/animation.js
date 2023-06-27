const setting_open = document.querySelector('#setting__open');
const setting = document.querySelector('#setting');
const setting_close = document.querySelector('#setting__close');
const setting__body = document.querySelector('.setting__body');

let isClosingAnimation = false;

// Два блока блять анимировал, я ебал...
setting_open.addEventListener('click', () => {
  setting.classList.remove('hidden');
  setting.classList.remove('animate__animated', 'animate__fadeOut', 'animate__faster');
  setting.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');

  setting__body.classList.remove('animate__animated', 'animate__fadeOutRightBig', 'animate__faster');
  setting__body.classList.add('animate__animated', 'animate__fadeInRightBig', 'animate__faster');
});

setting__close.addEventListener('click', () => {
  if (!isClosingAnimation) {
    setting.classList.remove('animate__animated', 'animate__fadeIn', 'animate__faster');
    setting.classList.add('animate__animated', 'animate__fadeOut', 'animate__faster');

    setting__body.classList.remove('animate__animated', 'animate__fadeInRightBig', 'animate__faster');
    setting__body.classList.add('animate__animated', 'animate__fadeOutRightBig', 'animate__faster');

    isClosingAnimation = true;
  }
});

setting.addEventListener('animationend', () => {
  if (isClosingAnimation) {
    setting.classList.add('hidden');
    setting__body.classList.add('animate__animated', 'animate__fadeOutRightBig', 'animate__faster');

    isClosingAnimation = false;
  }
});
