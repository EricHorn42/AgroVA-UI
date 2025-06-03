import React, { HTMLInputTypeAttribute } from "react";
import * as C from "./styles";

type InputParameters = {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  value: string
};

const Input = ({ type, placeholder, value, onChange } : InputParameters) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
