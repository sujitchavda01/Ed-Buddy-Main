
const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-primary to-purple-learn rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold">Ed-Buddy</span>
            </div>
            <p className="text-white/70">
              Every Child's Learning Buddy - Making education fun, interactive, and personalized for every child.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Features</h4>
            <ul className="space-y-2">
              <li><span className="text-white/70">AI-Powered Learning</span></li>
              <li><span className="text-white/70">Interactive Content</span></li>
              <li><span className="text-white/70">Gamified Experience</span></li>
              <li><span className="text-white/70">Parent Dashboard</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/70">
              <p>support@ed-buddy.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 Ed-Buddy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
