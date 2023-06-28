export class Utils {
  parseLocalStorage(storageID) {
    if (localStorage.getItem(storageID) && typeof JSON.parse(localStorage.getItem(storageID) === 'number')) {
      return parseInt(localStorage.getItem(storageID));
    }
  }
}
