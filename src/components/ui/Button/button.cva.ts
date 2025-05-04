import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "transition-colors focus-visible:outline-none",
    "disabled:bg-black/10 disabled:text-black/35 disabled:pointer-events-none",
    "[&_svg]:size-4 ",
  ],
  {
    variants: {
      variant: {
        contained: "btn-shadow",
        outlined: "bg-transparent border-[1px] hover:border-2",
        text: "bg-transparent",
      },
      colorButton: {
        primary: "",
        secondary: "",
        white: "",
        success: "",
        error: "",
        warning: "",
        info: "",
      },
      size: {
        small: "h-8 px-3 text-xs",
        medium: "h-9 px-4 text-sm",
        large: "h-10 px-8 text-base",
        icon: "h-9 w-9 p-0",
      },
      fontWeight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded",
        large: "rounded-md",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        colorButton: "primary",
        className:
          "text-neutral-100 bg-primary-main hover:bg-primary-dark/90 focus-visible:bg-primary-main/80",
      },
      {
        variant: "outlined",
        colorButton: "primary",
        className:
          "text-primary-main border-primary-main hover:bg-primary-dark/5 focus-visible:bg-primary-main/5",
      },
      {
        variant: "text",
        colorButton: "primary",
        className:
          "text-primary-main hover:bg-primary-dark/5 focus-visible:bg-primary-main/5",
      },
      {
        variant: "contained",
        colorButton: "secondary",
        className:
          "text-neutral-100 bg-secondary-main hover:bg-secondary-dark/90 focus-visible:bg-secondary-main/80",
      },
      {
        variant: "outlined",
        colorButton: "secondary",
        className:
          "text-secondary-main border-secondary-main hover:bg-secondary-dark/5 focus-visible:bg-secondary-main/5",
      },
      {
        variant: "text",
        colorButton: "secondary",
        className:
          "text-secondary-main hover:bg-secondary-dark/5 focus-visible:bg-secondary-main/5",
      },
      {
        variant: "contained",
        colorButton: "white",
        className:
          "text-neutral-900 bg-gray-100 hover:bg-gray-100/90 focus-visible:bg-gray-100/80",
      },
      {
        variant: "outlined",
        colorButton: "white",
        className:
          "text-gray-100 border-gray-100 hover:bg-gray-100/5 focus-visible:bg-gray-100/5",
      },
      {
        variant: "text",
        colorButton: "white",
        className:
          "text-gray-100 hover:bg-gray-100/5 focus-visible:bg-gray-100/5",
      },

      {
        variant: "contained",
        colorButton: "success",
        className:
          "text-neutral-100 bg-success-main hover:bg-success-dark/90 focus-visible:bg-success-main/80",
      },
      {
        variant: "outlined",
        colorButton: "success",
        className:
          "text-success-main border-success-main hover:bg-success-dark/5 focus-visible:bg-success-main/5",
      },
      {
        variant: "text",
        colorButton: "success",
        className:
          "text-success-main hover:bg-success-dark/5 focus-visible:bg-success-main/5",
      },
      {
        variant: "contained",
        colorButton: "error",
        className:
          "text-neutral-100 bg-error-main hover:bg-error-dark/90 focus-visible:bg-error-main/80",
      },
      {
        variant: "outlined",
        colorButton: "error",
        className:
          "text-error-main border-error-main hover:bg-error-dark/5 focus-visible:bg-error-main/5",
      },
      {
        variant: "text",
        colorButton: "error",
        className:
          "text-error-main hover:bg-error-dark/5 focus-visible:bg-error-main/5",
      },
      {
        variant: "contained",
        colorButton: "warning",
        className:
          "text-neutral-100 bg-warning-main hover:bg-warning-dark/90 focus-visible:bg-warning-main/80",
      },
      {
        variant: "outlined",
        colorButton: "warning",
        className:
          "text-warning-main border-warning-main hover:bg-warning-dark/5 focus-visible:bg-warning-main/5",
      },
      {
        variant: "text",
        colorButton: "warning",
        className:
          "text-warning-main hover:bg-warning-dark/5 focus-visible:bg-warning-main/5",
      },
      {
        variant: "contained",
        colorButton: "info",
        className:
          "text-neutral-100 bg-info-main hover:bg-info-dark/90 focus-visible:bg-info-main/80",
      },
      {
        variant: "outlined",
        colorButton: "info",
        className:
          "text-info-main border-info-main hover:bg-info-dark/5 focus-visible:bg-info-main/5",
      },
      {
        variant: "text",
        colorButton: "info",
        className:
          "text-info-main hover:bg-info-dark/5 focus-visible:bg-info-main/5",
      },
    ],
    defaultVariants: {
      size: "large",
      fontWeight: "semibold",
      radius: "medium",
      colorButton: "primary",
      variant: "contained",
    },
  }
);
