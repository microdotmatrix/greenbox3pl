import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Globe,
  Package,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

export const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white scroll-mt-[var(--nav-height)]"
    >
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Specialized Cannabis Accessory Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boutique fulfillment services designed specifically for cannabis
            accessory brands
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <Warehouse className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Specialized Storage</CardTitle>
              <CardDescription>
                Climate-controlled facilities designed for delicate glass and
                electronic accessories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom packaging solutions</li>
                <li>• Fragile item protection</li>
                <li>• Compliance documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <Truck className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Compliant Shipping</CardTitle>
              <CardDescription>
                Secure, discreet shipping with full compliance for cannabis
                accessory regulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Discreet packaging</li>
                <li>• Fragile item handling</li>
                <li>• Daily Pickups from all major carriers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <Package className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>White-Glove Fulfillment</CardTitle>
              <CardDescription>
                Careful handling and custom packaging for premium cannabis
                accessories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hand-packed orders</li>
                <li>• Custom branding inserts</li>
                <li>• Quality inspection</li>
                <li>• Damage prevention protocols</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Platform Integration</CardTitle>
              <CardDescription>
                Seamless integration with your platform and personalized
                reporting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ERP/CRM sync</li>
                <li>• Custom dashboards</li>
                <li>• Inventory alerts</li>
                <li>• Performance insights</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Multi-Channel Support</CardTitle>
              <CardDescription>
                Support for your direct-to-consumer and retail channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Shopify integration</li>
                <li>• WooCommerce support</li>
                <li>• BigCommerce</li>
                <li>• Wholesale fulfillment</li>
                <li>• Custom connections</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Personal Account Management</CardTitle>
              <CardDescription>
                Dedicated support team that knows your brand and products
                personally
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dedicated account manager</li>
                <li>• Direct phone & text access</li>
                <li>• Weekly check-ins</li>
                <li>• Customized solutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
