import { useState, useEffect } from "react";
import backgroundImage from "../assets/i3.jpg";

const DemoSection = () => {
  // Email input state
  const [email, setEmail] = useState("");

  // Initial countdown time setup
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 44,
    seconds: 29,
  });

  // Calculate the target date based on the initial time left
  const calculateTargetDate = () => {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + timeLeft.days,
      now.getHours() + timeLeft.hours,
      now.getMinutes() + timeLeft.minutes,
      now.getSeconds() + timeLeft.seconds
    );
  };

  // Store the target countdown date
  const [targetDate, setTargetDate] = useState(calculateTargetDate);

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission for notifications
  const handleNotifyMe = (e) => {
    e.preventDefault();
    console.log("Notify me with email:", email);
    alert("Thank you for your interest! We will notify you when we launch.");
    setEmail("");
  };

  // Countdown timer that updates every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="coming-soon"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main content container */}
      <div className="relative z-10 text-center text-white space-y-6 max-w-3xl w-full">
        {/* Heading and subheading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
          Ed-Buddy is Launching Soon
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light">
          A smarter, more joyful way for kids to learn is almost here.
        </p>

        {/* Countdown timer blocks */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-gray-800/70 rounded-md p-4 w-20 sm:w-24">
            <div className="text-2xl sm:text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-xs sm:text-sm">Days</div>
          </div>
          <div className="bg-gray-800/70 rounded-md p-4 w-20 sm:w-24">
            <div className="text-2xl sm:text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs sm:text-sm">Hours</div>
          </div>
          <div className="bg-gray-800/70 rounded-md p-4 w-20 sm:w-24">
            <div className="text-2xl sm:text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs sm:text-sm">Min</div>
          </div>
          <div className="bg-gray-800/70 rounded-md p-4 w-20 sm:w-24">
            <div className="text-2xl sm:text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs sm:text-sm">Secs</div>
          </div>
        </div>

        {/* Email subscription form */}
        <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto w-full">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full sm:flex-1 p-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition-colors"
          >
            Notify me
          </button>
        </form>

        {/* Disclaimer note */}
        <p className="text-xs text-gray-300 mt-4 max-w-sm mx-auto">
          By clicking Notify me you're confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
