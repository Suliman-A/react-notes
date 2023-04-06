import React from "react";

interface Props {
  title: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const AppButton = ({ title, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default AppButton;
