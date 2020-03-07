import { createSelector } from "reselect";
import { IAppState } from "Store/store";

export const vacancySelector = createSelector(
  (state: IAppState) => state.vacancy.data,
  (vacancy) => ({ vacancy }),
);
