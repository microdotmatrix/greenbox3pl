import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-white">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="w-fit border-green-200 text-green-700"
            >
              Boutique 3PL for Cannabis Accessory Brands
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Personalized{" "}
              <span className="text-green-600">Cannabis Accessory</span>{" "}
              Fulfillment
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We specialize in cannabis accessory fulfillment with the personal
              touch your brand deserves. Compliant, reliable, and tailored to
              your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact-form"
                className={buttonVariants({
                  variant: "ghost",
                  className: "bg-green-600 hover:bg-green-700 text-white",
                })}
              >
                Start Partnership
              </Link>
              <Link
                href="#services"
                className={buttonVariants({ variant: "outline" })}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/images/gb3pl.png?height=1280&width=1280"
              alt="Logistics warehouse operations"
              width={1280}
              height={1280}
              className="object-cover size-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
