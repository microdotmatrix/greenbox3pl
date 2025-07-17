"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Greenbox 3PL</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8 px-4">
          <Link
            href="#services"
            className="text-2xl font-medium"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#benefits"
            className="text-2xl font-medium"
            onClick={() => setOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="#about"
            className="text-2xl font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-2xl font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <SheetFooter>
          <Link
            href="#contact-form"
            className={buttonVariants({
              variant: "ghost",
              className: "text-white bg-green-600 hover:bg-green-700",
            })}
            onClick={() => setOpen(false)}
          >
            Get Quote
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
