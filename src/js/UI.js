import { Utils } from './Utils.js';

const utils = new Utils();

const loadSelectValue = (storageId, selectName) => {
  const selectDOM = document.querySelector(selectName);

  if (selectDOM) {
    if (localStorage.getItem(storageId)) {
      const { olSelectActive } = utils.getChildsByParent(selectDOM);
      olSelectActive.innerText = localStorage.getItem(storageId);
    }
  } else {
    console.log('[UI.Lib 2]: Переданный идентификатор не существует ни у одного из DOM элементов');
  }
};

class Ol {
  constructor() {
    this.selectValue = '123';
  }

  select(domEl) {
    if (domEl) {
      const select = document.querySelector(domEl);

      if (select) {
        const { olSelectActive, olSelectIcon, olSelectItems, olSelectList, olSelectOpen } =
          utils.getChildsByParent(select);

        olSelectOpen.addEventListener('click', () => {
          this.selectChangeVisible(olSelectList, olSelectIcon);
        });
        olSelectItems.forEach((item) => {
          item.addEventListener('click', (e) => {
            const target = e.target;
            const value = target.getAttribute('data-item');

            olSelectActive.innerText = value;

            this.selectSetValue(value);
            this.selectChangeVisible(olSelectList, olSelectIcon);
          });
        });
      }
    }
  }
  selectWatcher(selectName, storageId) {
    const selectDOM = document.querySelector(selectName);

    if (selectDOM) {
      utils.getChildsByParent(selectDOM).olSelectItems.forEach((item) => {
        item.addEventListener('click', (e) => {
          const target = e.target;
          const itemValue = target.getAttribute('data-item');

          localStorage.setItem(storageId, itemValue);
        });
      });
    } else {
      console.log('[UI.Lib]: Переданный идентификатор не существует ни у одного из DOM элементов');
    }
  }
  selectChangeVisible(list, icon) {
    list.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
  selectSetValue(value) {
    this.selectValue = value;
  }
  selectGetValue() {
    return this.selectValue;
  }
  selectGetValue() {
    return this.selectValue;
  }
}

const ol = new Ol();

ol.select('#theme');
ol.selectWatcher('#theme', 'theme_name');

ol.select('#sound');
ol.selectWatcher('#sound', 'sound_name');

loadSelectValue('theme_name', '#theme');
loadSelectValue('sound_name', '#sound');
