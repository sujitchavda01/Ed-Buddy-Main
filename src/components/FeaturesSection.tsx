import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: '#F8F1FF' }}>
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Unlock Your Child's Learning Potential
          </h2>
          <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
            Our platform offers a comprehensive curriculum tailored for K-12 students. Experience
            personalized learning paths that adapt to each child's unique needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          {/* Feature 1 */}
          <div className="p-4">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              AI-Powered Personalized Learning
            </h3>
            <p className="text-text-primary/70 leading-relaxed">
              Tailored learning paths adjust to each student's speed and choices for a great match.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-4">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Interactive, Animated Content
            </h3>
            <p className="text-text-primary/70 leading-relaxed">
              We don't just share ideas—we bring them to life with visuals that capture kids' imaginations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-4">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Gamified Learning + Real Projects
            </h3>
            <p className="text-text-primary/70 leading-relaxed">
              Rewards, challenges, and hands-on projects change boring lessons into fun and useful learning.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-4">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Smart Real-Time Adjustments
            </h3>
            <p className="text-text-primary/70 leading-relaxed">
              Our AI keeps track of how each child is doing and how engaged they are for optimal learning.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-4">
            <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Parental Dashboard & Safety Controls
            </h3>
            <p className="text-text-primary/70 leading-relaxed">
              Parents get full visibility, personalized insights, and control over their child's learning journey.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-4">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Strength-Based Learning Paths
            </h3>
            <p className="text-text-primary/70 leading-relaxed">
              We help children shine by focusing on their unique talents and reinforcing confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
