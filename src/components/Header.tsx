import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn UI Button component
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react"; // Icons used for menu and close
import { toast } from "sonner"; // Toast notification
import logo from "../assets/logo.png"; // Replace with your actual logo path

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    fathersName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  // Handles changes in form input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbwrbOZY2lOkYnzA7X-8btt6-yqRtp_tI7oo_1YIsHpz-kZAXOBccHxz3l9y06EC5kjj/exec";
    const form = new FormData();

    // Append form fields
    form.append("firstName", formData.firstName);
    form.append("fathersName", formData.fathersName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        body: form,
      });

      toast.success(
        <div className="text-lg text-green-600 font-semibold">
          🎉 Thank you! Your registration was completed successfully.
        </div>
      );

      // Reset form and close modal
      setFormData({ firstName: "", fathersName: "", lastName: "", email: "", phone: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        <div className="text-lg text-red-600 font-semibold">
          ⚠️ An error occurred. Please check your connection and try again.
        </div>
      );
    }
  };

  // Navigation links for header
  const navLinks = [
    { href: "#home", label: "Home Page" },
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Our Features" },
  ];

  return (
    <>
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-20" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <nav className="flex items-center space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors font-medium text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button
                variant="outline"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-medium text-base"
                onClick={() => console.log("Demo clicked")}
              >
                Demo
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium text-base"
                onClick={() => setShowModal(true)}
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-1"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-3 md:hidden pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 text-center text-base rounded-md hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-full py-2.5 rounded-lg font-medium text-base mt-2"
                onClick={() => {
                  console.log("Demo clicked mobile");
                  setMobileMenuOpen(false);
                }}
              >
                Demo
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2.5 rounded-lg font-medium text-base"
                onClick={() => {
                  setShowModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative transform transition-all scale-100 opacity-100">
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-purple-600">
              Get Started
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                pattern="[A-Za-z]{2,}"
                title="First name must contain at least 2 letters and only alphabets."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow"
              />
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                placeholder="Father's Name"
                required
                pattern="[A-Za-z ]{2,}"
                title="Father's name must contain at least 2 letters and only alphabets."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                pattern="[A-Za-z]{2,}"
                title="Last name must contain at least 2 letters and only alphabets."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                title="Please enter a valid email address."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                pattern="[6-9]{1}[0-9]{9}"
                title="Enter a valid 10-digit Indian mobile number starting with 6-9."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow"
              />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-base font-medium transition-colors">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
