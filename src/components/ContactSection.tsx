import React, { useState } from "react";
import { toast } from "sonner"; // Used for user notifications on form submission

const ContactSection = () => {
  // Initial form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  // Handles input changes and updates the corresponding form field
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the user has accepted the terms
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    try {
      // Send form data to Formspree
      const response = await fetch("#link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      // Handle successful response
      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "", termsAccepted: false });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }

    // Fallback success message
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "", termsAccepted: false });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header Section */}
        <div className="text-left mb-12">
          <p className="text-lg text-gray-700 font-medium mb-2">Connect</p>
          <h2 className="text-5xl font-serif text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">We'd love to hear from you!</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-800 text-lg mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full p-3 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-800 text-lg mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full p-3 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-gray-800 text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Type your message..."
              rows={6}
              className="w-full p-3 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800 resize-y"
              required
            ></textarea>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
              className="form-checkbox h-4 w-4 text-purple-600 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-700 select-none">
              I accept the Terms
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white py-3 rounded-md text-lg font-normal transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
