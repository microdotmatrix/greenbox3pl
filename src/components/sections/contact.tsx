import { ArrowDown, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Contact = () => {
  return (
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
            Join the growing family of vendors who trust us with their
            fulfillment
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-screen-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <Phone className="size-20 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">
                Call or Text
              </CardTitle>
              <CardDescription>
                Speak with our logistics experts
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">
                <a href="tel:8135926816">813-592-6816</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Mon - Fri | 8AM - 6PM EST
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Mail className="size-20 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">Email Us</CardTitle>
              <CardDescription>
                Get detailed information via email
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">
                <a href="mailto:info@greenbox3pl.com">info@greenbox3pl.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Response within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="#contact-form">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Your Custom Quote <ArrowDown />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
