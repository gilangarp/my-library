import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        default: "text-sm",
        base: "text-base",
        lg: "text-lg",
      },
      fontWeight: {
        normal: "font-normal",
        default: "font-medium",
        semibold: "font-semibold",
      },
      colorLabel: {
        default: "text-[#1E1E1E]",
        white: "text-white",
        primary: "text-primary-main",
        secondary: "text-secondary-main",
      },
    },
    defaultVariants: {
      size: "default",
      fontWeight: "default",
      colorLabel: "default",
    },
  }
);
