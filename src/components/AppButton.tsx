import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  title: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}
const AppButton = ({
  title,
  type = "button",
  color = "primary",
  onClick,
}: Props) => {
  return (
    <Button type={type} className={`btn btn-${color}`} onClick={onClick}>
      {title}
    </Button>
  );
};

export default AppButton;
