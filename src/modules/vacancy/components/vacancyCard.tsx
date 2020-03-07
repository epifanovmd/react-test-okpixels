import React, { FC, memo, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { IVacancy } from "Api/dto/Vacancy";
import { DateTime } from "luxon";

const Item = styled.div`
  padding: 4px 10px;
`;

const Card = styled(Item)<{ open: boolean }>`
  background: white;
  position: relative;
  ${({ open }) =>
    open
      ? css`
          border-radius: 10px 10px 0 0;
        `
      : css`
          border-radius: 10px;
        `};
  box-shadow: 0 2px 8px rgba(173, 173, 173, 0.2);
  max-width: 200px;
  padding: 10px 0;
  margin: 5px;
`;
const Title = styled(Item)`
  font-size: 16px;
  font-weight: bold;
`;
const Money = styled(Item)`
  font-size: 14px;
  color: black;
`;
const Company = styled.div`
  padding-top: 4px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  color: black;
`;
const Inn = styled.div`
  padding: 0 10px;
  font-size: 12px;
  color: gray;
`;
const Footer = styled(Item)<{ open?: boolean }>`
  display: flex;
  ${({ open }) =>
    open &&
    css`
      display: none;
    `};
  justify-content: space-between;
  color: gray;
`;
const NumVacancy = styled.div`
  padding-top: 4px;
`;
const Date = styled(Item)``;

const MoreInfo = styled.div<{ open: boolean }>`
  z-index: 1;
  background: white;
  position: absolute;
  ${({ open }) =>
    open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
  border-radius: 0 0 10px 10px;
  box-shadow: 0 10px 8px rgba(173, 173, 173, 0.25);
`;
const Name = styled.div`
  margin: 10px 0;
  padding: 15px;
  background: #eaecf5;
`;
const Bubbles = styled(Item)`
  display: flex;
  flex-flow: row wrap;
`;
const Bubble = styled.div`
  margin: 2px;
  padding: 2px 10px;
  color: white;
  background: #c5c7dc;
  border-radius: 10px;
`;

interface IProps extends Omit<IVacancy, "id"> {}

export const VacancyCard: FC<IProps> = memo(
  ({ title, money, company, inn, numVacancy, date, statuses, name, tags }) => {
    const [isHover, setHover] = useState(false);
    const onHoverTrigger = useCallback(
      (value) => () => {
        setHover(value);
      },
      [setHover],
    );

    return (
      <Card
        open={isHover}
        onMouseEnter={onHoverTrigger(true)}
        onMouseLeave={onHoverTrigger(false)}
      >
        <Title>{title}</Title>
        <Money>{money}</Money>
        <Company>{company}</Company>
        <Inn>{`ИНН ${inn}`}</Inn>
        <Footer open={isHover}>
          <NumVacancy>{numVacancy}</NumVacancy>
          <Date>{`от ${DateTime.fromISO(date).toFormat("dd.LL.yyyy")}`}</Date>
        </Footer>
        <MoreInfo open={isHover}>
          <Bubbles>
            {statuses.map((item) => (
              <Bubble key={item.id}>{item.value}</Bubble>
            ))}
          </Bubbles>
          <Name>{name}</Name>
          <Bubbles>
            {tags.map((item) => (
              <Bubble key={item.id}>{item.value}</Bubble>
            ))}
          </Bubbles>
          <Footer>
            <NumVacancy>{numVacancy}</NumVacancy>
            <Date>{`от ${DateTime.fromISO(date).toFormat("dd.LL.yyyy")}`}</Date>
          </Footer>
        </MoreInfo>
      </Card>
    );
  },
);
