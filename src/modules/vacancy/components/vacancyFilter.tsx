import React, { FC, memo, useCallback } from "react";
import { useForm } from "Common/useForm";
import styled from "styled-components";
import { CustomInput } from "Components/controls/customInput/customInput";

export interface IVacancyFilter {
  numVacancy: string;
  name: string;
}

interface IProps {
  onSetFilter: (values: IVacancyFilter) => void;
  filter: IVacancyFilter;
}
const FilterWrap = styled.div`
  padding: 10px 0;
  display: flex;
`;
const FilterItem = styled.div`
  padding-right: 25px;
`;
export const VacancyFilter: FC<IProps> = memo(({ onSetFilter, filter }) => {
  const { values, handleBlur, handleChange } = useForm<IVacancyFilter>({
    initialValues: {
      numVacancy: "",
      name: "",
    },
    data: filter,
  });

  const onInputEnter = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      console.log(event.keyCode);
      if (event.keyCode === 13) {
        onSetFilter(values);
      }
    },
    [onSetFilter, values],
  );

  return (
    <FilterWrap>
      <FilterItem>
        <CustomInput
          placeholder={"Номер заявки"}
          name={"numVacancy"}
          value={values.numVacancy}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onInputEnter}
        />
      </FilterItem>
      <FilterItem>
        <CustomInput
          placeholder={"Наименование клиента"}
          name={"name"}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onInputEnter}
        />
      </FilterItem>
    </FilterWrap>
  );
});
