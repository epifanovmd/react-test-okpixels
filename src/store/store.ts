import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createMainReduce } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoadState } from "Common/loadState";
import { IVacancyState } from "Modules/vacancy/IVacancyState";

export interface IReduxState<T> {
  error?: Error;
  loadState?: LoadState;
  count?: number;
  page?: number;
  limit?: number;
  data: T;
}

export interface IAppState {
  vacancy: IVacancyState;
}

export interface IExtraArguments {}

const middleware =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(
        applyMiddleware(thunkMiddleware.withExtraArgument<IExtraArguments>({})),
      )
    : applyMiddleware(thunkMiddleware.withExtraArgument<IExtraArguments>({}));

const reducers = createMainReduce();

export const createSimpleStore = (initialState?: IAppState) => {
  return createStore(reducers, initialState, middleware);
};
