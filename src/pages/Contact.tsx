import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Inquiry Received",
        description: "We will be in touch.",
      });

      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Contact
          </h1>
          <p className="text-lg text-silver">
            Request a Strategic Review
          </p>
          <div className="w-24 h-1 bg-accent accent-glow mt-8"></div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Form Section - Elevated graphite */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl border-l-2 border-accent pl-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-silver">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background border-border text-foreground focus:border-accent focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-silver">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background border-border text-foreground focus:border-accent focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm text-silver">
                  Organization
                </Label>
                <Input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="bg-background border-border text-foreground focus:border-accent focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-silver">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background border-border text-foreground focus:border-accent focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 border-0 accent-glow transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
