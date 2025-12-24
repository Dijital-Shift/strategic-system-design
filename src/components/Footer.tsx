import { Link } from "react-router-dom";
import { useRef } from "react";
import { Download } from "lucide-react";
import HolySieve from "./HolySieve";
import { downloadSvgAsPng } from "@/utils/downloadSvg";

const Footer = () => {
  const sieveRef = useRef<SVGSVGElement>(null);

  const handleDownload = () => {
    if (sieveRef.current) {
      downloadSvgAsPng(sieveRef.current, "holy-sieve.png");
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* DS Logo - Aesthetic only */}
              <span className="relative flex items-center justify-center w-8 h-8">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 32 32">
                  <line x1="16" y1="2" x2="16" y2="30" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.45" />
                  <line x1="2" y1="16" x2="30" y2="16" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.45" />
                  <line x1="5" y1="5" x2="27" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.35" />
                  <line x1="27" y1="5" x2="5" y2="27" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.35" />
                  <circle cx="16" cy="16" r="4" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.3" />
                  <circle cx="16" cy="16" r="8" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.25" />
                  <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.2" />
                </svg>
                <span className="absolute inset-0 rounded-full border-[1.5px] border-accent"></span>
                <span className="relative text-accent text-base font-sans font-semibold tracking-tight">DS</span>
              </span>
              <span className="text-xl font-sans font-medium tracking-tight text-foreground">
                Dijital Shift
              </span>
            </div>
            <p className="text-sm text-silver leading-relaxed">
              Strategic System Design for Ambitious Organizations
            </p>
            
            {/* Holy Sieve with download */}
            <div className="mt-6 flex items-end gap-3">
              <HolySieve ref={sieveRef} />
              <button
                onClick={handleDownload}
                className="p-2 text-silver-dim hover:text-accent transition-colors rounded-md hover:bg-accent/10"
                title="Download as PNG"
              >
                <Download size={18} />
              </button>
            </div>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-0.5 bg-accent"></div>
              <p className="text-xs text-silver-dim">
                © {new Date().getFullYear()} Dijital Shift. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-xs text-silver-dim hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-xs text-silver-dim hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
