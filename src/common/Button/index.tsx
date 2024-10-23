import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

interface ButtonPropsExtended extends ButtonProps {
  type?: "button" | "submit" | "reset"; // Adicione tipos apropriados aqui
}

export const Button = ({ color, children, onClick, type = "button" }: ButtonPropsExtended) => (
  <StyledButton color={color} onClick={onClick} type={type}>
    {children}
  </StyledButton>
);
