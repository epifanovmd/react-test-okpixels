import { reducerWithInitialState } from "typescript-fsa-reducers";
import { newState } from "Store/common/newState";
import { Failure, Success } from "typescript-fsa";
import { LoadState } from "Common/loadState";
import { VacancyActions } from "./vacancyActions";
import {
  initialVacancyState,
  IVacancyState,
} from "Modules/vacancy/IVacancyState";
import { IEmpty } from "Common/IEmpty";
import { IVacancy } from "Api/dto/Vacancy";
import { IReduxState } from "Store/store";
import { IResponse } from "@/Api";

const startedGetVacancyHandler = (state: IVacancyState) => {
  return newState(state, {
    loadState: LoadState.refreshing,
  });
};
const doneGetVacancyHandler = (
  state: IVacancyState,
  { result }: Success<IEmpty, IResponse<IVacancy[]>>,
) => {
  return newState(state, {
    data: result.data,
    count: result.data.length,
    loadState: LoadState.idle,
  });
};
const failureGetVacancyHandler = (
  state: IVacancyState,
  { error }: Failure<IEmpty, Error>,
) => {
  return newState(state, {
    error: error,
    loadState: LoadState.error,
  });
};

export const vacancyReducer = reducerWithInitialState(initialVacancyState)
  .case(VacancyActions.getVacancy.started, startedGetVacancyHandler)
  .case(VacancyActions.getVacancy.done, doneGetVacancyHandler)
  .case(VacancyActions.getVacancy.failed, failureGetVacancyHandler)
  .build();
