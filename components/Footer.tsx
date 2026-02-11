import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Recap<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Reels</span>
            </h3>
            <p className="text-neutral-400 mb-4 max-w-md">
              Professional short-form video content services for businesses. 
              Helping brands, startups, and agencies grow through compelling video storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="mailto:recapreelsbusiness@gmail.com" className="hover:text-white transition-colors">
                  recapreelsbusiness@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916304583037" className="hover:text-white transition-colors">
                  +91 630-458-3037
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} RecapReels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

