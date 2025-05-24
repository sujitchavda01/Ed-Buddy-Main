
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import photo from "../assets/istockphoto-1005450652-612x612.jpg";

const HeroSection = () => {
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
                    <path d="M2 10c30-8 60-8 90 0s60 8 90 0" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                for kids
              </h1>
              
              <p className="text-xl text-text-primary/70 max-w-lg">
                Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-text-primary italic">
                Every Child's Learning Buddy
              </p>
              <p className="text-text-primary/60">
                Big imaginations. Curious minds. Every day's an adventure when learning feels like play.
              </p>
            </div>
            
            <Button className="bg-purple-primary hover:bg-purple-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={photo}
                alt="Happy child learning"
                className="rounded-full w-80 h-80 object-cover mx-auto shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-play/20 rounded-full animate-bounce-gentle"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-learn/20 rounded-full animate-bounce-gentle delay-1000"></div>
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-purple-primary/20 rounded-full animate-bounce-gentle delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
