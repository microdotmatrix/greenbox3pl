import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-24 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center size-20 overflow-clip relative"
        >
          <Image
            src="/images/greenbox-logo-2.png"
            alt="GreenBox3PL Logo"
            fill
            className="size-full object-cover"
          />
          <span className="sr-only">GreenBox 3PL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#services"
            className="transition-colors hover:text-green-600"
          >
            Services
          </Link>
          <Link
            href="#benefits"
            className="transition-colors hover:text-green-600"
          >
            Benefits
          </Link>
          <Link
            href="#about"
            className="transition-colors hover:text-green-600"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-green-600"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav />

        <Link
          href="#contact-form"
          className={buttonVariants({
            variant: "ghost",
            className:
              "text-white bg-green-600 hover:bg-green-700 hidden md:inline-flex",
          })}
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
};
