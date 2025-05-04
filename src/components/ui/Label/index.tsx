import React from "react";
import { LabelProps } from "./label.props";
import { labelVariants } from "./label.cva";

export const Label: React.FC<LabelProps> = ({
  size,
  fontWeight,
  colorLabel,
  className,
  ...props
}: LabelProps) => (
  <label
    className={labelVariants({ size, fontWeight, colorLabel, className })}
    {...props}
  />
);
