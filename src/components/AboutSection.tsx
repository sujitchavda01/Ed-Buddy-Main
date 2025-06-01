import photo from "../assets/i2.jpg"; // First image: woman and child studying
import secondImage from "../assets/i4.jpg"; // Second image: child with paint on hands and face

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section 1: About Us */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          {/* Text content - About Us */}
          <div className="md:w-1/2 text-left space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              About us
            </h2>

            <p className="text-text-primary/80 leading-relaxed">
              At Ed-Buddy, we're enhancing early education for kids, parents, and
              teachers. Traditional learning often misses the mark, leaving parents
              without useful resources.
            </p>

            <p className="text-text-primary/80 leading-relaxed">
              That's why we created Ed-Buddy—a fun learning platform for kids. Our AI
              assistant provides personalized support and keeps kids motivated with
              animated lessons.
            </p>

            <p className="text-text-primary/80 leading-relaxed">
              We create engaging videos and interactive games that make learning
              enjoyable. Through storytelling and kid-friendly graphics, we ensure
              lessons are exciting and easy to understand.
            </p>

            <p className="text-text-primary/80 leading-relaxed">
              Our platform uses games and real-world activities to help children develop
              essential skills like teamwork, creativity, and problem-solving.
            </p>

            <p className="text-text-primary/80 leading-relaxed">
              Ed-Buddy also features a parent dashboard for tracking progress and
              content management. Teachers, parents, and students can connect easily
              in one place.
            </p>

            <p className="text-text-primary/80 leading-relaxed">
              At Ed-Buddy, we're not just teaching subjects; we're fostering curious,
              confident, and future-ready learners.
            </p>
          </div>

          {/* Image content - About Us */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={photo}
              alt="A woman and a child studying together with books and pencils"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Section 2: Revolutionizing Education */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 mt-20">
          {/* Image content - Revolutionizing Education (shown after text on small screens) */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={secondImage}
              alt="A child with paint on their hands and face, smiling"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Text content - Revolutionizing Education */}
          <div className="md:w-1/2 text-left space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Revolutionizing Education: Embrace a New Era of Interactive Learning
            </h2>

            <p className="text-text-primary/80 leading-relaxed">
              Our vision is to transform traditional education into a dynamic and
              engaging experience. By harnessing innovative technology, we aim to
              inspire curiosity and foster a love for learning in every student.
            </p>

            <p className="text-text-primary/80 leading-relaxed">
              Our vision is to transform traditional education into an immersive and
              interactive experience. We believe that every student deserves a learning
              environment that fosters curiosity and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
