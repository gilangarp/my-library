import React from "react";
import { ButtonProps } from "./button.props";
import { buttonVariants } from "./button.cva";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  className,
  size,
  fontWeight,
  variant,
  colorButton,
  fullWidth,
  radius,
  ...prop
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonVariants({
          size,
          fontWeight,
          radius,
          variant,
          fullWidth,
          colorButton,
        }),
        className
      )}
      {...prop}
    />
  );
};
