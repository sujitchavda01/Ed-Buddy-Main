import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xgvkjaap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          termsAccepted: false,
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Want to work with us?
            </h2>
            <p className="text-xl text-text-primary/70">
              Let's discuss how Ed-Buddy can help your child's learning journey.
            </p>
          </div>

          <div className="bg-white/80 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    pattern="^[A-Za-z\s]{3,}$"
                    title="Please enter at least 3 characters. Only alphabets and spaces allowed."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    title="Please enter a valid email address."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-text-primary font-medium mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Your phone number"
                  pattern="^\+?[0-9\s\-]{7,15}$"
                  title="Please enter a valid phone number (7-15 digits, optional +, spaces, or dashes)."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your needs and how we can help..."
                  rows={5}
                  required
                  minLength={10}
                  title="Please enter at least 10 characters."
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                  required
                  aria-describedby="terms-desc"
                />
                <label htmlFor="terms" className="text-sm text-text-primary/70 leading-relaxed">
                  I accept the terms and conditions and privacy policy. I consent to Ed-Buddy contacting me about their services.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-primary hover:bg-purple-primary/90 text-white py-3 rounded-full text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
