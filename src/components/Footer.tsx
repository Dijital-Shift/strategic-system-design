import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm font-sans font-medium text-foreground mb-4">
              Dijital Shift
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic System Design for Ambitious Organizations
            </p>
          </div>

          <div>
            <p className="text-sm font-sans font-medium text-foreground mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/founder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Founder
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-sans font-medium text-foreground mb-4">
              Contact
            </p>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Request a Strategic Review
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-silver">
            © {new Date().getFullYear()} Dijital Shift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
