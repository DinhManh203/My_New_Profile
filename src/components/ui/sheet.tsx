"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { IoMdClose } from "react-icons/io"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import type { ComponentPropsWithoutRef } from "react"

const Sheet = (props: ComponentPropsWithoutRef<typeof SheetPrimitive.Root>) => (
  <SheetPrimitive.Root {...props} />
)

const SheetTrigger = (props: ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>) => (
  <SheetPrimitive.Trigger {...props} />
)

const SheetClose = (props: ComponentPropsWithoutRef<typeof SheetPrimitive.Close>) => (
  <SheetPrimitive.Close {...props} />
)

const SheetOverlay = ({ className, ...props }: ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 transition-all",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
)

const SheetContent = ({
  className,
  children,
  side = "right",
  ...props
}: ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) => (
  <SheetPrimitive.Portal>
    <SheetOverlay />
    <SheetPrimitive.Content
      className={cn(
        "fixed z-50 flex flex-col bg-primary shadow-lg transition ease-in-out",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:duration-300 data-[state=open]:duration-500",
        {
          right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
          left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          top: "inset-x-0 top-0 h-auto border-b",
          bottom: "inset-x-0 bottom-0 h-auto border-t",
        }[side],
        {
          right: "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          left: "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
          top: "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
          bottom: "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        }[side],
        className
      )}
      {...props}
    >
      {/* Accessible Title (hidden visually, but required) */}
      <VisuallyHidden>
        <SheetTitle>Sheet Panel</SheetTitle>
      </VisuallyHidden>

      <SheetPrimitive.Close className="absolute right-8 top-8 outline-none transition-opacity">
        <IoMdClose className="text-3xl text-accent" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>

      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
)

const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />
)

const SheetFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
)

const SheetTitle = ({ className, ...props }: ComponentPropsWithoutRef<typeof SheetPrimitive.Title>) => (
  <SheetPrimitive.Title className={cn("text-foreground font-semibold", className)} {...props} />
)

const SheetDescription = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof SheetPrimitive.Description>) => (
  <SheetPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
)

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
