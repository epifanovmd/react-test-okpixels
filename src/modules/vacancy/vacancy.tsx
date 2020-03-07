import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VacancyAsyncActions } from "Modules/vacancy/vacancyAsyncActions";
import { vacancySelector } from "Modules/vacancy/vacancySelector";
import { VacancyList } from "Modules/vacancy/components/vacancyList";

const Vacancy: FC = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(VacancyAsyncActions.getVacancy());
  }, []);
  const { vacancy } = useSelector(vacancySelector);

  return <VacancyList list={vacancy} />;
});

export default Vacancy;
