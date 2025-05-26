import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { ArrowUpRight, X } from "lucide-react";
import React,{ useState } from "react";
import { toast } from "sonner";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    fathersName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const scriptURL = "https://script.google.com/macros/s/AKfycbwrbOZY2lOkYnzA7X-8btt6-yqRtp_tI7oo_1YIsHpz-kZAXOBccHxz3l9y06EC5kjj/exec";

  const form = new FormData();
  form.append("firstName", formData.firstName);
  form.append("fathersName", formData.fathersName);
  form.append("lastName", formData.lastName);
  form.append("email", formData.email);
  form.append("phone", formData.phone);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors", // optional, but suppresses error (won't read response!)
      body: form,
    });

    // alert("Form submitted successfully!");
    toast.success(
      <div className="text-lg text-green-600 font-semibold">
         🎉 Thank you! Your registration was completed successfully.
      </div>
    );
    setFormData({ firstName: "", fathersName: "", lastName: "", email: "", phone: "" });
    setShowModal(false);
  } catch (error) {
    // alert("Network error: " + error.message);
    toast.error(
      <div className="text-lg text-red-600 font-semibold">
        ⚠️ An error occurred while submitting. Please check your connection and try again.
      </div>
    );

  }
  };



  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-16" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="text-text-primary focus:outline-none focus:ring-2 focus:ring-purple-primary rounded"
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Nav + Button */}
      <div className="hidden md:flex items-center space-x-4">
        <nav className="flex items-center space-x-8">
          <a
            href="#home"
            className="text-text-primary hover:text-purple-primary transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-text-primary hover:text-purple-primary transition-colors font-medium"
          >
            About Us
          </a>
          <a
            href="#features"
            className="text-text-primary hover:text-purple-primary transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-text-primary hover:text-purple-primary transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        <Button
          className="bg-purple-primary hover:bg-purple-primary/90 text-white px-6 py-2 rounded-full font-medium flex items-center"
          onClick={() => setShowModal(true)}
        >
          Get Started
          <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>

    {/* Mobile Nav Menu */}
    {mobileMenuOpen && (
      <nav className="mt-4 flex flex-col space-y-4 md:hidden text-center">
        <a
          href="#home"
          className="block text-text-primary hover:text-purple-primary transition-colors font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-text-primary hover:text-purple-primary transition-colors font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          About Us
        </a>
        <a
          href="#features"
          className="block text-text-primary hover:text-purple-primary transition-colors font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Features
        </a>
        <a
          href="#contact"
          className="block text-text-primary hover:text-purple-primary transition-colors font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </a>

        <Button
          className="bg-purple-primary hover:bg-purple-primary/90 text-white px-6 py-2 rounded-full font-medium mx-auto w-full max-w-xs"
          onClick={() => {
            setShowModal(true);
            setMobileMenuOpen(false);
          }}
        >
          Get Started
          <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </nav>
    )}
  </div>
</header>


      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={() => setShowModal(false)}>
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-center text-purple-primary">Get Started</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                pattern="[A-Za-z]{2,}"
                title="First name must contain at least 2 letters and only alphabets."
                className="w-full p-3 border rounded-lg"
              />

              {/* Father's Name */}
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                placeholder="Father's Name"
                required
                pattern="[A-Za-z ]{2,}"
                title="Father's name must contain at least 2 letters and only alphabets."
                className="w-full p-3 border rounded-lg"
              />

              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                pattern="[A-Za-z]{2,}"
                title="Last name must contain at least 2 letters and only alphabets."
                className="w-full p-3 border rounded-lg"
              />

              {/* Email Address */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                title="Please enter a valid email address."
                className="w-full p-3 border rounded-lg"
              />

              {/* Mobile Number */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                pattern="[6-9]{1}[0-9]{9}"
                title="Enter a valid 10-digit Indian mobile number starting with 6-9."
                className="w-full p-3 border rounded-lg"
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-purple-primary text-white py-3 rounded-lg">
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
