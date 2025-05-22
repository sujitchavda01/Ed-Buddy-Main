
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            About Ed-Buddy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <p className="text-text-primary/80 leading-relaxed">
                At Ed-Buddy, we're making early education better for today's kids, parents, and teachers. We know that traditional learning doesn't always keep children interested or support their unique ways of learning—and it often leaves parents without the right tools to help.
              </p>
              
              <p className="text-text-primary/80 leading-relaxed">
                That's why we created Ed-Buddy—a smart, fun learning platform built just for kids. Our AI learning assistant gives children personalized help, shows fun animated lessons, and keeps them excited about learning.
              </p>
              
              <p className="text-text-primary/80 leading-relaxed">
                We create fun and engaging content through videos and interactive games that bring learning to life. Using storytelling, anime-style animation, and child-friendly graphics, we make every lesson exciting and easy to understand.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-text-primary/80 leading-relaxed">
                We use games, projects, and real-world activities to help kids build important life skills like teamwork, creativity, and problem-solving.
              </p>
              
              <p className="text-text-primary/80 leading-relaxed">
                But we're not stopping at the classroom. Ed-Buddy includes a special parent dashboard where families can track their child's progress, control content, and stay involved. Teachers, parents, and students can easily stay connected—all in one place.
              </p>
              
              <p className="text-text-primary/80 leading-relaxed font-semibold">
                At Ed-Buddy, we're not just teaching school subjects. We're helping kids become curious, confident, and future-ready learners.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-primary/10 to-yellow-play/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-text-primary/80 italic">
              To deliver personalized, interactive, and engaging educational experiences that nurture curiosity, creativity, and confidence in every child.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
