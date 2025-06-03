import React from "react";
import * as C from "./styles";

type ButtonProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, onClick, type = "button", children }) => {
  return (
    <C.Button type={type} onClick={onClick} className={className}>
      {children}
    </C.Button>
  );
};

export default Button;