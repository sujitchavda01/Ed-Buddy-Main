
const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Personalized Learning",
      description: "Tailored learning paths adapt to every student's pace and preferences, ensuring an experience that fits like a glove.",
      icon: "🤖"
    },
    {
      title: "Interactive, Animated Content",
      description: "We don't just show concepts—we bring them to life with visual storytelling that captures young imaginations.",
      icon: "🎨"
    },
    {
      title: "Gamified Learning + Real Projects",
      description: "Rewards, challenges, and real-world projects transform passive lessons into active, meaningful learning.",
      icon: "🎮"
    },
    {
      title: "Smart Real-Time Adjustments",
      description: "Our AI continuously responds to each child's engagement level and progress, keeping learning effective and fun.",
      icon: "⚡"
    },
    {
      title: "Parental Dashboard & Safety Controls",
      description: "Parents get full visibility, personalized insights, and the ability to guide their child's learning journey.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Strength-Based Learning Paths",
      description: "We help children shine by focusing on their unique talents and reinforcing confidence through personalized content.",
      icon: "🌟"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Features That Make Learning Fun
          </h2>
          <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
            Every feature is designed with your child's growth, safety, and joy in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{feature.title}</h3>
              <p className="text-text-primary/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
