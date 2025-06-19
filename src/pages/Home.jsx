import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto py-24 px-6 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold mb-8 leading-tight">
        Hi, I'm Vardaan <span className="wave">👋</span>
      </h1>

      <p className="text-xl leading-relaxed mb-6">
        I’m a <span className="font-semibold text-blue-600 dark:text-blue-400">frontend developer</span> who loves building beautiful, accessible, and performant websites. I enjoy blending thoughtful design with clean, scalable code to create seamless digital experiences.
      </p>

      <p className="text-xl leading-relaxed mb-6">
        Currently, I’m pursuing a B.Tech in <span className="font-medium">Data Science & Artificial Intelligence</span>, where I explore the intersection of code, data, and creativity.
      </p>

      <p className="text-xl leading-relaxed mb-6">
        Beyond the screen, I’m deeply curious about <span className="italic">Japanese culture and language</span>, and I’m constantly seeking new ways to bring that inspiration into my projects.
      </p>

      <p className="text-xl leading-relaxed">
        Whether I’m designing intuitive UIs, experimenting with AI tools, or learning something new, I’m always driven by the desire to grow, connect, and contribute meaningfully to the digital world.
      </p>
    </motion.div>
  );
};

export default Home;
