import { SimpleThunk } from "Common/simpleThunk";
import { VacancyActions } from "Modules/vacancy/vacancyActions";
import { IVacancy } from "Api/dto/Vacancy";
import { callApi } from "Store/common/apiActionsAsync";
import { RequestType } from "Common/requestType";

export const VacancyAsyncActions = {
  getVacancy: (success?: (values: IVacancy[]) => void): SimpleThunk => {
    return callApi({
      url: "vacancy",
      method: RequestType.GET,
      actions: VacancyActions.getVacancy,
      params: {},
      onSuccess: ({}, result) => {
        success && success(result.data);
      },
    });
  },
};
