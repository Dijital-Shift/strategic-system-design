import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput = ({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-background border-border text-foreground focus:border-accent focus:ring-accent/20 transition-all pt-5 pb-2"
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none text-silver ${
          isFloating
            ? "top-1 text-xs"
            : "top-1/2 -translate-y-1/2 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

interface FloatingLabelTextareaProps {
  id: string;
  label: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FloatingLabelTextarea = ({
  id,
  label,
  required = false,
  rows = 6,
  value,
  onChange,
}: FloatingLabelTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <Textarea
        id={id}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-background border-border text-foreground focus:border-accent focus:ring-accent/20 transition-all resize-none pt-6 pb-2"
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none text-silver ${
          isFloating
            ? "top-2 text-xs"
            : "top-4 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

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
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 animate-fade-in">
          <p className="text-silver uppercase tracking-[0.3em] text-sm mb-6">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Contact
          </h1>
          <p className="text-lg text-silver mb-8">
            Request a Strategic Review
          </p>
          <div className="w-24 h-1 bg-accent accent-glow mb-12"></div>
          
          <div className="max-w-2xl space-y-6 text-silver leading-relaxed">
            <p>
              This review is intended for organizations who believe their current direction is only a starting point.
            </p>
            <p>
              It is a space to explore what could be built if structure, systems, and ambition were allowed to scale together. The goal is not improvement alone, but expansion into something larger and more deliberate than originally envisioned.
            </p>
            <p>
              We tend to work with people who are less interested in incremental change and more interested in what could exist ten steps from now.
            </p>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-1 divider-gradient" />

      {/* Form Section - Elevated graphite */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl border-l-2 border-accent pl-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <FloatingLabelInput
                id="name"
                label="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <FloatingLabelInput
                id="email"
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <FloatingLabelInput
                id="organization"
                label="Organization"
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
              />

              <FloatingLabelTextarea
                id="message"
                label="Message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

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
