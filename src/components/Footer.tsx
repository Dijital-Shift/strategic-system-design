import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-graphite bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm font-sans font-medium text-bone mb-4">
              Dijital Shift
            </p>
            <p className="text-sm text-silver leading-relaxed">
              Strategic System Design for Ambitious Organizations
            </p>
          </div>

          <div>
            <p className="text-sm font-sans font-medium text-bone mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-silver hover:text-bone transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-silver hover:text-bone transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-silver hover:text-bone transition-colors">
                Services
              </Link>
              <Link to="/founder" className="text-sm text-silver hover:text-bone transition-colors">
                Founder
              </Link>
              <Link to="/contact" className="text-sm text-silver hover:text-bone transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-sans font-medium text-bone mb-4">
              Contact
            </p>
            <Link
              to="/contact"
              className="text-sm text-silver hover:text-bone transition-colors"
            >
              Request a Strategic Review
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-graphite">
          <p className="text-xs text-silver">
            © {new Date().getFullYear()} Dijital Shift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
