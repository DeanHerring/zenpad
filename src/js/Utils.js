export class Utils {
  findChildByParent(className, parent) {
    const childs = [];
    let elements = parent.querySelectorAll('.' + className);

    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];

      childs.push(element);
    }

    return childs;
  }

  getChildsByParent(select) {
    const olSelectList = this.findChildByParent('ol__select-list', select)[0];
    const olSelectOpen = this.findChildByParent('ol__select-top', select)[0];
    const olSelectItems = this.findChildByParent('ol__select-item', select);
    const olSelectIcon = this.findChildByParent('ol__select-icon', select)[0];
    const olSelectActive = this.findChildByParent('ol__select-active', select)[0];

    return { olSelectActive, olSelectIcon, olSelectItems, olSelectList, olSelectOpen };
  }
}
