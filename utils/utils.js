export function amortiguador(fn, t) {
  let timerId = undefined;
  return (...args) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = undefined;
    }, t);
  };
}
