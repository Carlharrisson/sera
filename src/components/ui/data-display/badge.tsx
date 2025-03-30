import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center border px-2.5 py-0.5 text-xs font-mono uppercase tracking-[0.05em] transition-colors mx-auto w-fit px-4 py-2  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-[--divider-color] bg-background text-foreground ",
                secondary:
                    "border-transparent bg-yellow-500 text-foreground",
                outline:
                    "border-[--divider-color] text-foreground bg-transparent",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground",
            },
            rounded: {
                default: "rounded-full text-xs",
                sm: "rounded-full text-sm",
                md: "rounded-full text-sm",
                lg: "rounded-full text-sm",
                full: "rounded-full text-sm",
            }
        },
        defaultVariants: {
            variant: "default",
            rounded: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, rounded, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant, rounded }), className)} {...props} />
    )
}

export { Badge, badgeVariants } 