import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-teal-400 text-white',
        secondary: 'bg-sky-400 text-white',
      },
      size: {
        md: 'py-2 px-4 text-base',
        sm: 'py-1 px-2 text-sm',
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
)

export interface ButtonVariants
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonVariants> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={buttonVariants({variant, size, className})} {...props} />;