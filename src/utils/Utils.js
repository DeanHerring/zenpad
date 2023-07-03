export class Utils {
  readLocalStorage(storageID, defaultValue) {
    const storedValue = localStorage.getItem(storageID);

    if (storedValue && typeof JSON.parse(storedValue) === 'number') {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  }

  getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
