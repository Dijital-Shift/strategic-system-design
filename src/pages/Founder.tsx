import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Founder = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
            Leadership
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Justin E. Johnson
          </h1>
          <p className="text-lg text-silver">
            Founder & Principal Strategist
          </p>
          <div className="w-24 h-1 bg-accent accent-glow mt-8"></div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8 border-l-2 border-accent pl-8">
            <p className="text-lg text-silver leading-relaxed">
              I've always been more interested in what could exist than in optimizing what already does.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              My work comes from seeing systems not as fixed structures, but as living constructs that can evolve into something far larger than their original intent. I'm drawn to situations where ambition outpaces structure, where the direction is clear, but the path has not yet been fully designed.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              I take my work seriously because direction matters. The systems we build shape what people are able to create, who they are able to partner with, and how far their ideas can actually travel. That responsibility isn't abstract to me. It is practical, and it is long-term.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              Over time, I've built a network of builders, operators, and thinkers who share that posture. Not everyone needs the same thing, but the right people tend to recognize each other quickly. When alignment exists, opportunities form naturally.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              I'm selective in what I engage with. Not because of scarcity, but because real progress requires shared vision, timing, and intent. I'm most interested in working with people who believe their current direction is only a starting point.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              My aim is not short-term wins or surface-level improvement. It is to participate in building things that endure, compound, and create room for others to build alongside them.
            </p>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Scripture Verse Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl font-serif italic text-silver-highlight leading-relaxed mb-6">
              "For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry."
            </p>
            <p className="text-sm text-silver uppercase tracking-[0.2em]">
              Habakkuk 2:3 (KJV)
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
