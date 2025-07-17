import { Badge } from "@/components/ui/badge";

export const Partners = () => {
  return (
    <section className="py-16 bg-white border-b">
      <div className="container px-4">
        <div className="text-center space-y-6">
          <Badge
            variant="outline"
            className="border-green-200 text-green-700 text-lg px-4 py-2"
          >
            Official Smoke Drop Partner
          </Badge>
          <h2 className="text-2xl font-bold">Trusted by Smoke Drop Vendors</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As the preferred 3PL for Smoke Drop, we understand the unique
            challenges of cannabis accessory fulfillment. From glass pieces to
            vaporizers, we handle your products with the care and compliance
            they require.
          </p>
          <div className="flex justify-center items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.5%</div>
              <div className="text-sm text-muted-foreground">
                Damage-Free Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24hr</div>
              <div className="text-sm text-muted-foreground">
                Processing Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
