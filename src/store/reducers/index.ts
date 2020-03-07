import { combineReducers, Reducer } from "redux";
import { IAppState } from "Store/store";
import { vacancyReducer } from "Modules/vacancy/vacancyReducer";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = {
    vacancy: vacancyReducer,
  };

  return combineReducers(_reducers);
}
