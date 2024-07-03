import * as React from "react"

import { cn } from "~/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex-row h-9 w-full rounded-md border border-green-800 bg-transparent px-3 py-1 text-sm shadow-lg hover:border-pink-700 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export type PasswordInputProps = InputProps & { showPassword?: boolean }

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type = "password", showPassword, ...props }, ref) => {
    return (
      <Input
        className={className}
        type={showPassword ? "password" : type} // Toggle type based on showPassword
        {...props}
        ref={ref}
      />
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { Input, PasswordInput }
