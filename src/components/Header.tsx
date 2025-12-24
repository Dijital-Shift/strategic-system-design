import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative flex items-center justify-center w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)]">
              {/* Subtle webbing lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 32 32">
                <line x1="16" y1="2" x2="16" y2="30" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.3" />
                <line x1="2" y1="16" x2="30" y2="16" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.3" />
                <line x1="5" y1="5" x2="27" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.25" />
                <line x1="27" y1="5" x2="5" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.25" />
                <line x1="16" y1="2" x2="5" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
                <line x1="16" y1="2" x2="27" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
                <line x1="2" y1="16" x2="27" y2="5" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
                <line x1="2" y1="16" x2="27" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
              </svg>
              <span className="absolute inset-0 rounded-full border-[1.5px] border-accent"></span>
              <span className="relative text-accent text-base font-sans font-semibold tracking-tight">DS</span>
            </span>
            <span className="text-xl font-sans font-medium tracking-tight text-foreground">
              Dijital Shift
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-sans transition-all duration-300 py-1 ${
                  location.pathname === link.href
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:shadow-[0_0_8px_hsl(var(--accent)/0.5)]"
                    : "text-silver hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-6 bg-card">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-sans py-2 transition-all duration-300 ${
                    location.pathname === link.href
                      ? "text-accent border-l-2 border-accent pl-3 shadow-[inset_0_0_10px_hsl(var(--accent)/0.1)]"
                      : "text-silver hover:text-foreground pl-3"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
