import * as React from "react";
import styled from "styled-components";

interface IInputProp {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface IFormProp {
  onFormSubmit: (e: React.FormEvent) => void;
}
export const Input: React.FunctionComponent<IInputProp> = ({ value, onChange }) => {
  return <input type="text" placeholder="name" value={value} onChange={onChange} />;
};

export const Form: React.FunctionComponent<IFormProp> = ({ children, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>{children}</form>
);
