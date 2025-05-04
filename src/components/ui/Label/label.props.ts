import { VariantProps } from "class-variance-authority";
import { labelVariants } from "./label.cva";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}
