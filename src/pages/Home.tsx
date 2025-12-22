import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <Layout>
      {/* Hero Section with Background Image */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" style={{
        backgroundImage: `url(${heroBg})`,
        transform: `translateY(${scrollY * 0.4}px) scale(1.1)`
      }} />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/40" />
        {/* Subtle accent glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
        
        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="max-w-4xl">
            <p className="text-silver-highlight uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
          </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>Strategic System Design for Ambitious Organizations</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              What exists today is rarely the full expression of what is possible. I work with systems as they are — and as they could become. 
            </p>
            <div className="animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 border-0 accent-glow transition-all duration-300">
                <Link to="/contact">Request a Strategic Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Positioning Section - Elevated graphite */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-l-2 border-accent pl-8">
            <p className="text-silver-highlight text-sm uppercase tracking-[0.2em] mb-6">OUR APPROACH</p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">​We work with organizations that have built something meaningful and now need their systems to match their ambition. 


 This work is for organizations willing to think beyond their original scope.  </p>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Navigation Cards */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-silver text-sm uppercase tracking-[0.2em] mb-12">
            Explore
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/about" className="group p-8 border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 card-glow hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 transform-gpu">
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">About</h3>
              <p className="text-sm text-silver-dim group-hover:text-silver transition-colors">
                Our practice and approach
              </p>
            </Link>

            <Link to="/services" className="group p-8 border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 card-glow hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 transform-gpu">
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">Services</h3>
              <p className="text-sm text-silver-dim group-hover:text-silver transition-colors">
                How engagements begin
              </p>
            </Link>

            <Link to="/founder" className="group p-8 border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 card-glow hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 transform-gpu">
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">Founder</h3>
              <p className="text-sm text-silver-dim group-hover:text-silver transition-colors">
                Principal Strategist
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;