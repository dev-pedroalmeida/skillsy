import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-teal-400 text-white hover:brightness-105',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-opacity-70',
      },
      size: {
        md: 'py-2 px-4 text-sm',
        sm: 'py-2 px-4 text-xs',
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