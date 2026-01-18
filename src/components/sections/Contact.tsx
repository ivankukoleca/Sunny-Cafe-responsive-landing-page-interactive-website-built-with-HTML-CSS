import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Coffee Street, Downtown District",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@sunnycafe.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 7AM-9PM | Sat-Sun: 8AM-10PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to book an event? We'd love to hear from 
            you. Drop us a message and we'll get back to you soon!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-warm-md">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background border-border focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  required
                  className="bg-background border-border focus:ring-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-warm-sm">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Visit Us
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-warm-sm h-[200px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-accent/50" />
                <p className="text-sm">Interactive Map</p>
                <p className="text-xs">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
