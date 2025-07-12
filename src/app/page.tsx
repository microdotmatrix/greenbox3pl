import ContactForm from "@/components/contact";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart3,
  Clock,
  Globe,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Shield,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white [--nav-height:6rem]">
      {/* Header */}
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
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#services" className="text-lg font-medium">
                  Services
                </Link>
                <Link href="#benefits" className="text-lg font-medium">
                  Benefits
                </Link>
                <Link href="#about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="#contact" className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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
                The preferred 3PL partner for Smoke Drop vendors. We specialize
                in cannabis accessory fulfillment with the personal touch your
                brand deserves. Compliant, reliable, and tailored to your unique
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Partnership
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
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

      {/* Smoke Drop Partnership Section */}
      <section className="py-16 bg-white border-b">
        <div className="container px-4">
          <div className="text-center space-y-6">
            <Badge
              variant="outline"
              className="border-green-200 text-green-700 text-lg px-4 py-2"
            >
              Official Smoke Drop Partner
            </Badge>
            <h2 className="text-2xl font-bold">
              Trusted by Smoke Drop Vendors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As the preferred 3PL for Smoke Drop, we understand the unique
              challenges of cannabis accessory fulfillment. From glass pieces to
              vaporizers, we handle your products with the care and compliance
              they require.
            </p>
            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-muted-foreground">
                  Smoke Drop Brands
                </div>
              </div>
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

      {/* Services Section */}
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
              accessory brands and Smoke Drop vendors
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
                  <li>• Temperature-controlled storage</li>
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
                  <li>• State compliance tracking</li>
                  <li>• Fragile item handling</li>
                  <li>• Age verification support</li>
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
                <CardTitle>Smoke Drop Integration</CardTitle>
                <CardDescription>
                  Seamless integration with Smoke Drop platform and personalized
                  reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Direct Smoke Drop sync</li>
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
                  Beyond Smoke Drop - support for your direct-to-consumer and
                  retail channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Shopify integration</li>
                  <li>• WooCommerce support</li>
                  <li>• Amazon FBA prep</li>
                  <li>• Wholesale fulfillment</li>
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
                  <li>• Custom solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              The personal touch and specialized expertise your cannabis
              accessory brand deserves
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
              <h3 className="text-xl font-semibold">
                Fragile Item Specialists
              </h3>
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

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white scroll-mt-[var(--nav-height)]"
      >
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your Cannabis Accessory Fulfillment Specialists
              </h2>
              <p className="text-lg text-muted-foreground">
                As a boutique 3PL focused exclusively on cannabis accessories,
                we understand the unique challenges your brand faces. From
                fragile glass pieces to complex electronic devices, we treat
                every product with the specialized care it deserves.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">
                    50+ Cannabis Brands
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized in accessory fulfillment
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
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Modern warehouse facility"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-green-50 scroll-mt-[var(--nav-height)]"
      >
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Elevate Your Cannabis Accessory Fulfillment?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the growing family of Smoke Drop vendors who trust us with
              their fulfillment
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>
                  Speak with our logistics experts
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">1-800-GREENBOX</p>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri 8AM-6PM EST
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  Get detailed information via email
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">info@greenbox3pl.com</p>
                <p className="text-sm text-muted-foreground">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>Tour our facilities</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">Multiple Locations</p>
                <p className="text-sm text-muted-foreground">
                  Nationwide coverage
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Your Custom Smoke Drop Quote
            </Button>
          </div>
        </div>
      </section>

      <section>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4 flex flex-col">
              <Image
                src="/images/greenbox-logo-2.png"
                alt="GreenBox3PL Logo"
                height={120}
                width={120}
                className="size-20 object-cover brightness-0 invert"
              />
              <p className="text-xs text-gray-400">
                Your trusted partner for comprehensive third-party logistics
                solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Warehousing</li>
                <li>Transportation</li>
                <li>Order Fulfillment</li>
                <li>Supply Chain Analytics</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>1-800-GREENBOX</li>
                <li>info@greenbox3pl.com</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 GreenBox3PL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
