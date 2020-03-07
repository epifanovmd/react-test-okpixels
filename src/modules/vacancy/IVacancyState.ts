import { LoadState } from "Common/loadState";
import { IReduxState } from "Store/store";
import { IVacancy } from "Api/dto/Vacancy";

export interface IVacancyState extends IReduxState<IVacancy[]> {}

export const initialVacancyState: IVacancyState = {
  data: [],
  loadState: LoadState.needLoad,
};
