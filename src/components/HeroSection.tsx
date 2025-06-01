import { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn UI button component
import { X } from "lucide-react"; // Icon used to close the modal
import photo from "../assets/i1.jpg"; // Hero section background image
import { toast } from "sonner"; // Toast notification library

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    fathersName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbwrbOZY2lOkYnzA7X-8btt6-yqRtp_tI7oo_1YIsHpz-kZAXOBccHxz3l9y06EC5kjj/exec";

    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("fathersName", formData.fathersName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: form
      });

      toast.success(
        <div className="text-lg text-green-600 font-semibold">
          🎉 Thank you! Your registration was completed successfully.
        </div>
      );

      setFormData({
        firstName: "",
        fathersName: "",
        lastName: "",
        email: "",
        phone: ""
      });

      setShowModal(false);
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error(
        <div className="text-lg text-red-600 font-semibold">
          ⚠️ An error occurred. Please check your connection and try again.
        </div>
      );
    }
  };

  return (
    <>
      {/* Hero Section with background image */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photo})` }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl lg:max-w-2xl text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight shadow-sm">
                Every Child's Learning Buddy
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-lg leading-relaxed">
                Big imaginations. Curious minds. Every day's an adventure when
                learning feels like play. At Ed-Buddy, we're here to grow with your
                little learner—one joyful step at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button
                className="bg-purple-600 hover:bg-purple-700 hover:bg-gray-100 text-white hover:text-black px-8 py-3 rounded-md text-lg font-semibold shadow-md transition-colors duration-300 w-full sm:w-auto"
                onClick={() => setShowModal(true)}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-md border-white/50 hover:border-white/70 transition-all duration-300 w-full sm:w-auto"
                onClick={() => console.log("Learn More Clicked")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Registration Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative transform transition-all scale-100 opacity-100">
            
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-700">
              Get Started
            </h2>

            {/* Registration Form */}
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
              <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg text-base font-medium transition-colors">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
