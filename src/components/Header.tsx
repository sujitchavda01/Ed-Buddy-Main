
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-primary to-purple-learn rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-2xl font-bold text-text-primary">Ed-Buddy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-text-primary hover:text-purple-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-text-primary hover:text-purple-primary transition-colors font-medium">About Us</a>
            <a href="#features" className="text-text-primary hover:text-purple-primary transition-colors font-medium">Features</a>
            <a href="#contact" className="text-text-primary hover:text-purple-primary transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-text-primary hover:text-purple-primary transition-colors font-medium">Sign In</button>
            <Button className="bg-purple-primary hover:bg-purple-primary/90 text-white px-6 py-2 rounded-full font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
