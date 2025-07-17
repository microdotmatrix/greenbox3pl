import ContactForm from "@/components/contact";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Services } from "@/components/sections/services";

export default function HomePage() {
  return (
    <main className="scroll-mt-[var(--nav-height)] flex-1">
      {/* Hero Section */}
      <Hero />

      {/* Smoke Drop Partnership Section */}
      <Partners />

      {/* Services Section */}
      <Services />

      {/* Benefits Section */}
      <Benefits />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      <section
        id="contact-form"
        className="py-20 bg-white scroll-mt-[var(--nav-height)]"
      >
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
