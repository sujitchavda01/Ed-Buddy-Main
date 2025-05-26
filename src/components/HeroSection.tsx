import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import photo from "../assets/istockphoto-1005450652-612x612.jpg";
import { toast } from "sonner";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
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

    const scriptURL = "https://script.google.com/macros/s/AKfycbwrbOZY2lOkYnzA7X-8btt6-yqRtp_tI7oo_1YIsHpz-kZAXOBccHxz3l9y06EC5kjj/exec"; // Replace with your actual deployed URL

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

      // alert("Form submitted successfully!");
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
      toast.error(
        <div className="text-lg text-red-600 font-semibold">
          ⚠️ An error occurred while submitting. Please check your connection and try again.
        </div>
      );
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                The best place to{" "}
                <span className="text-purple-learn italic">learn</span> and{" "}
                <span className="text-yellow-play relative">
                  play
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path
                      d="M2 10c30-8 60-8 90 0s60 8 90 0"
                      stroke="#FBBF24"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                for kids
              </h1>
              <p className="text-xl text-text-primary/70 max-w-lg">
                Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
              </p>
            </div>
            <Button
              className="bg-purple-primary hover:bg-purple-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold group"
              onClick={() => setShowModal(true)}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={photo}
              alt="Happy child learning"
              className="rounded-full w-80 h-80 object-cover mx-auto shadow-2xl"
            />
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-play/20 rounded-full animate-bounce-gentle" />
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-learn/20 rounded-full animate-bounce-gentle delay-1000" />
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-purple-primary/20 rounded-full animate-bounce-gentle delay-500" />
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
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
    </section>
  );
};

export default HeroSection;
