import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-2 text-muted-foreground">
            Send me a message and I'll get back to you soon.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
