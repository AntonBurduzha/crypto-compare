export default function memoize(func) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Value from cache');
      return cache[key];
    } else {
      console.log('Calculated value');
      const val = func.apply(null, args);
      cache[key] = val;
      return val;
    }
  };
}
