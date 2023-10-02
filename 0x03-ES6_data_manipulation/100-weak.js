
export const weakMap = new WeakMap();

const endpoint = {}
weakMap.set(endpoint, 0);

export function queryAPI(endpoint) {
  
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error(`Endpoint load is high`);
  }

}
