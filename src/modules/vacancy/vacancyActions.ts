import { actionCreator } from "Store/common/actionCreator";
import { IEmpty } from "Common/IEmpty";
import { IVacancy } from "Api/dto/Vacancy";
import { IResponse } from "@/Api";

export const VacancyActions = {
  getVacancy: actionCreator.async<IEmpty, IResponse<IVacancy[]>, Error>(
    "GET/VACANCY",
  ),
};
