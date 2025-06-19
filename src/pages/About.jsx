const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

      {/* Timeline block */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">🎯 The Beginning</h3>
        <p className="text-lg leading-relaxed">
          My journey started with a deep curiosity about how technology can bridge the gap between humans and machines. This led me to pursue a B.Tech in <span className="font-medium">Data Science & Artificial Intelligence</span>, where I laid the foundation for my technical growth.
        </p>
      </div>

      {/* Timeline block */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">💡 Discovering Frontend</h3>
        <p className="text-lg leading-relaxed">
          Along the way, I discovered my passion for <span className="font-medium">frontend development</span>. I was drawn to the creative possibilities of turning ideas into elegant user interfaces. I now work with tools like <span className="font-medium">React, TailwindCSS, and Flutter</span> to build responsive, accessible, and user-centric designs.
        </p>
      </div>

      {/* Timeline block */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">🤖 Diving into AI</h3>
        <p className="text-lg leading-relaxed">
          With my academic focus on AI, I’ve also worked on projects involving <span className="font-medium">real-time object detection</span>, <span className="font-medium">productivity tools</span>, and <span className="font-medium">multilingual learning platforms</span>. These experiences have helped me explore the intersection of intelligence, usability, and ethics in software.
        </p>
      </div>

      {/* Timeline block */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">🚀 What I'm Doing Now</h3>
        <p className="text-lg leading-relaxed">
          I’m currently sharpening my skills in full-stack development and building personal projects that merge creativity with impact. I enjoy contributing to tools that are meaningful, technically sound, and emotionally intuitive.
        </p>
      </div>

      {/* Timeline block */}
      <div>
        <h3 className="text-xl font-semibold mb-2">🌏 Beyond the Code</h3>
        <p className="text-lg leading-relaxed">
          Outside the screen, I’m deeply inspired by <span className="italic">Japanese culture</span>, love learning new languages, and stay active with regular workouts. I believe that diverse experiences fuel better code — and better connection.
        </p>
      </div>
    </div>
  );
};

export default About;
