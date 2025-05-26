import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

const DemoSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    fathersName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbzW3B0qsvbpAdwQAFi4IBao4YJzqxrGZIXIHT_vBAk46UNrG7Vb_PysDlnYz6uaZj4/exec";

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
        body: form,
      });

      toast.success(
        <div className="text-lg text-green-600 font-semibold">
          🎉 Thank you! Your Demo registration was completed successfully.
        </div>
      );
      setFormData({ firstName: "", fathersName: "", lastName: "", email: "", phone: "" });
      setShowModal(false);
    } catch (error: any) {
      toast.error(
        <div className="text-lg text-red-600 font-semibold">
          ⚠️ An error occurred while submitting. Please check your connection and try again.
        </div>
      );
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 sm:mb-8">
            Get the Demo
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-text-primary/70 mb-8 sm:mb-12">
            Limited time offer! Book your personalized demo and see Ed-Buddy in action.
          </p>

          <div className="bg-gradient-to-br from-purple-primary/10 to-yellow-play/10 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
              Demo Available For:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-6 sm:mb-8">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
                return (
                  <div key={label} className="bg-white/80 rounded-xl p-4 shadow-md text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-primary">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-text-primary/70">{label}</div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold bg-purple-primary hover:bg-purple-primary/90 text-white rounded-full transition-all duration-300"
            >
              Book Your Demo Now
            </Button>
          </div>
        </div>
      </div>


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-0">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full max-h-screen overflow-y-auto shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-purple-primary">
              Book Your Demo Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "firstName", placeholder: "First Name" },
                { name: "fathersName", placeholder: "Father's Name" },
                { name: "lastName", placeholder: "Last Name" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Mobile Number", type: "tel" },
              ].map(({ name, placeholder, type = "text" }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              ))}
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

export default DemoSection;
