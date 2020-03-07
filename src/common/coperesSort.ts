export const ComparesSort = {
  alphabetically: <T, K extends keyof T>(key: K) => (a: T, b: T) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0,
};
