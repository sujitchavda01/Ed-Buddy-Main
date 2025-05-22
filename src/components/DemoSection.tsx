
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8">
            Get the Demo
          </h2>
          
          <p className="text-xl text-text-primary/70 mb-12">
            Limited time offer! Book your personalized demo and see Ed-Buddy in action.
          </p>
          
          <div className="bg-gradient-to-br from-purple-primary/10 to-yellow-play/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Demo Available For:</h3>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-primary">{timeLeft.days}</div>
                <div className="text-sm text-text-primary/70">Days</div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-primary">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm text-text-primary/70">Hours</div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-primary">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm text-text-primary/70">Minutes</div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-primary">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm text-text-primary/70">Seconds</div>
              </div>
            </div>
            
            <Button className="bg-purple-primary hover:bg-purple-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Book Your Demo Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
