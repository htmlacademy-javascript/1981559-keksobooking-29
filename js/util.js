const isEscapeKey = (evt) => evt.key === 'Escape';
const pluralize = (count, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]]}`;
};
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, pluralize, debounce};
