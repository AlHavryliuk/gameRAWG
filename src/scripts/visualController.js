export const visual = {
  show(...selectors) {
    selectors.forEach(element => {
      document.querySelector(element).classList.remove(`isHidden`);
    });
  },
  hidden(...selectors) {
    selectors.forEach(element => {
      document.querySelector(element).classList.add(`isHidden`);
    });
  },
  toggle(...selectors) {
    selectors.forEach(element => {
      document.querySelector(element).classList.toggle(`isHidden`);
    });
  },
  active(...selectors) {
    selectors.forEach(element => {
      document.querySelector(element).classList.add(`isActivePage`);
    });
  },
  disactive(...selectors) {
    selectors.forEach(element => {
      document.querySelector(element).classList.remove(`isActivePage`);
    });
  },
};
