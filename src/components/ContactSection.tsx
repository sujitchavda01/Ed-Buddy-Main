
import { useState } from "react";
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
    termsAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      termsAccepted: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-primary font-medium mb-2">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="border-purple-200 focus:border-purple-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="border-purple-200 focus:border-purple-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-text-primary font-medium mb-2">Phone</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Your phone number"
                  className="border-purple-200 focus:border-purple-primary"
                />
              </div>
              
              <div>
                <label className="block text-text-primary font-medium mb-2">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your needs and how we can help..."
                  rows={5}
                  required
                  className="border-purple-200 focus:border-purple-primary"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
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
