
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-green-600 text-white hover:bg-green-700", // Changed from primary to green
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-300",
        outline:
          "border border-input bg-green-600 text-white hover:bg-green-700 hover:text-white", // Changed from bg-background to green
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // New standard button variants with consistent styling
        primary: "bg-innovate-600 text-white hover:bg-innovate-700 shadow-md hover:shadow-lg transition-all duration-300",
        success: "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300",
        green: "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300",
        dark: "bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300",
        purple: "bg-purple-800 text-white hover:bg-purple-900 shadow-md hover:shadow-lg transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
      width: {
        default: "",
        full: "w-full",
        auto: "w-auto",
        fixed: "min-w-[200px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "fixed",  // Changed default width to fixed for consistency
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
