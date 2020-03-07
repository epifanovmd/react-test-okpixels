import React, { FC, memo } from "react";
import styled from "styled-components";
import Searchicon from "../../../images/search.svg";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  touch?: boolean;
  title?: string;
  positionTitle?: "top" | "left";
  requiredIcon?: boolean;
  minWidthTitle?: string;
  description?: string;
}

const Search = styled(Searchicon)`
  padding: 10px;
  left: 30px;
  height: 16px;
  width: 16px;
  position: absolute;
`;
const Input = styled.input`
  outline: none;
  padding: 10px 10px 10px 55px;
  border-radius: 15px;
  box-shadow: none;
  border: 1px solid gray;
`;
const Wrap = styled.div`
  padding: 8px;
  position: relative;
`;

const Required = styled.div`
  color: red;
  display: flex;
  font-size: 14px;
  padding-right: 3px;
  align-items: center;
`;

const Label = styled.label<{ minWidthTitle?: string; positionTitle?: string }>`
  ${({ positionTitle }) =>
    positionTitle === "left" ? "padding-top: 5px;" : ""};
  display: flex;
  ${({ minWidthTitle }) =>
    minWidthTitle ? `min-width: ${minWidthTitle}` : ""};
  padding-right: 10px;
  justify-content: ${({ positionTitle }) =>
    positionTitle === "left" ? "flex-end" : "flex-start"};
  align-items: flex-start;
`;

const Error = styled.div`
  color: red;
  min-width: 256px;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #8c8c8c;
`;

const InputWrap = styled.div`
  width: 100%;
`;

const TitleWrap = styled.div<{ positionTitle?: "top" | "left" }>`
  ${({ positionTitle }) => (positionTitle === "left" ? "display: flex;" : "")}
`;

export const CustomInput: FC<IProps> = memo((props) => {
  const {
    title,
    touch,
    error,
    name,
    positionTitle,
    requiredIcon,
    minWidthTitle,
    description,
    ...rest
  } = props;

  return (
    <Wrap>
      <TitleWrap positionTitle={positionTitle}>
        {title && (
          <Label
            positionTitle={positionTitle}
            minWidthTitle={minWidthTitle}
            htmlFor={name}
          >
            {requiredIcon && <Required>*</Required>}
            {title}
          </Label>
        )}
        <InputWrap>
          <Search />
          <Input name={name} {...rest} />
          {error && touch && <Error>{error}</Error>}
          {description && <Description>{description}</Description>}
        </InputWrap>
      </TitleWrap>
    </Wrap>
  );
});
