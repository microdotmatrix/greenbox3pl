import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white scroll-mt-[var(--nav-height)]"
    >
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Cannabis Accessory Fulfillment Specialists
            </h2>
            <p className="text-lg text-muted-foreground">
              As a boutique 3PL focused exclusively on cannabis accessories, we
              understand the unique challenges your brand faces. From fragile
              glass pieces to complex electronic devices, we treat every product
              with the specialized care it deserves.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">
                  Cannabis Brands
                </h4>
                <p className="text-sm text-muted-foreground">
                  Specialized in product fulfillment
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">
                  99.5% Damage-Free
                </h4>
                <p className="text-sm text-muted-foreground">
                  Industry-leading fragile item protection
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">
                  Smoke Drop Preferred
                </h4>
                <p className="text-sm text-muted-foreground">
                  Official partner with seamless integration
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">
                  Personal Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Direct access to your account manager
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-md min-h-64 mx-auto w-full h-full grid place-content-center rounded-lg shadow-lg p-8 order-1 lg:order-2">
            <Image
              src="/images/smoke-drop.png"
              alt="Modern warehouse facility"
              width={420}
              height={420}
              className="object-contain max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
