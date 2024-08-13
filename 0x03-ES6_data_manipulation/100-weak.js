export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const counter = weakMap.get(endpoint);
    weakMap.set(endpoint, counter + 1);
    if (counter + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
