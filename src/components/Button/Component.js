import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
  rounded = "none", // sm md lg full
}) => {
  const roundedCls = `rounded-${rounded}`;
  return (
    <button
      className={classNames("py-2 px-5", {
        "bg-primary text-white": color === "primary" && variant === "contained",
        "bg-white text-primary border-primary border":
          color === "primary" && variant === "outlined",
        "opacity-50 pointer-events-none cursor-not-allowed": disabled,
        [roundedCls]: rounded !== "none",
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
