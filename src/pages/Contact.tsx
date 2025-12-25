import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Check } from "lucide-react";

// Replace with your Formspree form ID from https://formspree.io/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

interface LabeledInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}

const LabeledInput = ({
  id,
  name,
  label,
  type = "text",
  required = false,
  maxLength,
}: LabeledInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-silver mb-2">
        {label}:
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="bg-background border-border text-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none transition-all"
      />
    </div>
  );
};

interface LabeledTextareaProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

const LabeledTextarea = ({
  id,
  name,
  label,
  required = false,
  rows = 6,
  maxLength,
}: LabeledTextareaProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-silver mb-2">
        {label}:
      </label>
      <Textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className="bg-background border-border text-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none transition-all resize-none"
      />
    </div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Form submission failed");
      }
    } catch (err) {
      setError("There was an error submitting the form. Please try again.");
      console.error("Form submission error:", err);
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
            <form 
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-8"
            >
              <LabeledInput
                id="name"
                name="name"
                label="Name"
                required
                maxLength={100}
              />

              <LabeledInput
                id="email"
                name="email"
                label="Email"
                type="email"
                required
                maxLength={255}
              />

              <LabeledInput
                id="organization"
                name="organization"
                label="Organization"
                maxLength={100}
              />

              <LabeledTextarea
                id="message"
                name="message"
                label="Message"
                required
                rows={6}
                maxLength={2000}
              />

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                size="lg"
                className={`w-full border-0 transition-all duration-300 ${
                  isSuccess 
                    ? "bg-green-600 text-white hover:bg-green-600" 
                    : "bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5 accent-glow"
                }`}
              >
                {isSuccess ? (
                  <span className="flex items-center justify-center animate-scale-in">
                    <Check className="mr-2 h-5 w-5" />
                    Sent Successfully
                  </span>
                ) : isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
