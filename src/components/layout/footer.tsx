import Image from "next/image";

export const Footer = () => {
  return (
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
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@greenbox3pl.com">info@greenbox3pl.com</a>
              </li>
              <li>
                <a href="tel:8135926816">813-592-6816</a>
              </li>
              <li>Mon - Fri | 8AM - 6PM EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 GreenBox3PL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
