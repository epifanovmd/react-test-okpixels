import React, { FC, memo, useMemo, useState } from "react";
import styled from "styled-components";
import { VacancyCard } from "Modules/vacancy/components/vacancyCard";
import { IVacancy } from "Api/dto/Vacancy";
import {
  IVacancyFilter,
  VacancyFilter,
} from "Modules/vacancy/components/vacancyFilter";
import { filterArray } from "Common/filterArray";

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
interface IProps {
  list: IVacancy[];
}

export const VacancyList: FC<IProps> = memo(({ list }) => {
  const [filter, onSetFilter] = useState<IVacancyFilter>({
    name: "",
    numVacancy: "",
  });

  const filterList: IVacancy[] = useMemo(
    () =>
      filterArray(list, [
        { key: "name", value: filter.name, compare: (a, b) => a === b },
        {
          key: "numVacancy",
          value: +filter.numVacancy,
          compare: (a, b) => a === b,
        },
      ]),
    [filter, list],
  );

  return (
    <>
      <VacancyFilter filter={filter} onSetFilter={onSetFilter} />
      <List>
        {filterList.map((item) => (
          <VacancyCard
            key={item.id}
            title={item.title}
            company={item.company}
            date={item.date}
            inn={item.inn}
            money={item.money}
            numVacancy={item.numVacancy}
            statuses={item.statuses}
            name={item.name}
            tags={item.tags}
          />
        ))}
      </List>
    </>
  );
});
