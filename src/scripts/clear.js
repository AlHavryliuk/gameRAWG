export const clear = {
  allSelectors(selector) {
    document.querySelectorAll(selector).forEach(el => el.remove());
  },
  selector(...selectors) {
    selectors.forEach(element => {
      document.querySelector(element).replaceChildren('');
    });
  },
};
