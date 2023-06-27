const editor = document.querySelector('#editor');
const settingOpen = document.querySelector('#setting__open');

const fontSize = localStorage.getItem('font_size');
const paperWidth = localStorage.getItem('paper_width');
const showBorder = localStorage.getItem('show_border');
const soundName = localStorage.getItem('sound_name');
const themeName = localStorage.getItem('theme_name');
const volumeClick = localStorage.getItem('volume_click');

// Editor
editor.addEventListener('keydown', () => settingOpen.classList.add('hidden'));
editor.addEventListener('mouseout', () => settingOpen.classList.remove('hidden'));

// Font Size
// if (fontSize) {
//   editor.style.fontSize = `${fontSize}px`;
// }

// Paper Width

// Show Border
if (showBorder && JSON.parse(showBorder)) {
  editor.style.border = '1px solid red';
}

// Sound Name

// Theme Name

// Volume Clikc
