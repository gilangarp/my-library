import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.cva";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
