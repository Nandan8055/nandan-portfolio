"use client";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={"inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium " + className}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
