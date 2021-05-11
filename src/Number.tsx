import * as React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const Container = styled.div<{ isBlue: boolean }>`
  font-size: 15px;
  background-color: ${(props) => (props.isBlue ? props.theme.colors.main : props.theme.colors.secondary)};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => <Container isBlue={count < 10}>{count}</Container>;

export default Number;
