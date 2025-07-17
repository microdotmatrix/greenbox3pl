import { Clock, Package, Shield, Users } from "lucide-react";

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-20 bg-green-50 scroll-mt-[var(--nav-height)]"
    >
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Cannabis Accessory Brands Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The personal touch and specialized expertise your cannabis accessory
            brand deserves
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Compliance Expertise</h3>
            <p className="text-muted-foreground">
              Navigate complex cannabis accessory regulations with confidence
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Package className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Fragile Item Specialists</h3>
            <p className="text-muted-foreground">
              Expert handling of glass, ceramics, and delicate electronic
              accessories
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Boutique Service</h3>
            <p className="text-muted-foreground">
              Personal relationships and customized solutions for every client
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Smoke Drop Ready</h3>
            <p className="text-muted-foreground">
              Seamless integration with your existing Smoke Drop operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
