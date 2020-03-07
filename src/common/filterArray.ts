interface IFilterParams<T> {
  key: keyof T;
  value?: T[keyof T];
  compare: (a: T[keyof T], b: T[keyof T]) => boolean;
}
export const filterArray = <T>(array: T[], params: IFilterParams<T>[]) => {
  return array.filter((item) => {
    return params.every(({ key, value, compare }) =>
      value ? key in item && compare(item[key], value) : true,
    );
  });
};
