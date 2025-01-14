import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-neutral-800",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 ring-1 ring-gray-200/70",
      },
      size: {
        lg: "py-2 px-4 text-lg",
        md: "py-2 px-4 text-sm",
        sm: "py-2 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface IButtonProps {
  RightIcon?: React.ReactElement;
}

export interface ButtonVariants
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonProps,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonVariants>(
  ({ className, variant, size, RightIcon, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {props.children}
        {RightIcon && <span>{RightIcon}</span>}
      </button>
    );
  }
)
Button.displayName = "Button"
