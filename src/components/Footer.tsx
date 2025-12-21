import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm font-sans font-medium text-foreground mb-4">
              Dijital Shift
            </p>
            <p className="text-sm text-silver leading-relaxed">
              Strategic System Design for Ambitious Organizations
            </p>
          </div>

          <div>
            <p className="text-sm font-sans font-medium text-silver-highlight mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-silver-dim hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-silver-dim hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-silver-dim hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/founder" className="text-sm text-silver-dim hover:text-accent transition-colors">
                Founder
              </Link>
              <Link to="/contact" className="text-sm text-silver-dim hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-sans font-medium text-silver-highlight mb-4">
              Contact
            </p>
            <Link
              to="/contact"
              className="text-sm text-silver-dim hover:text-accent transition-colors"
            >
              Request a Strategic Review
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-8 h-0.5 bg-accent"></div>
            <p className="text-xs text-silver-dim">
              © {new Date().getFullYear()} Dijital Shift. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
