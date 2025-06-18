import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto py-24 px-6 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold mb-6 leading-tight">
        Hi, I'm Vardaan <span className="wave">👋</span>
      </h1>
      <p className="text-xl leading-relaxed">
        I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">frontend developer</span> with a passion for crafting elegant and accessible web experiences. I blend design sensitivity with clean, scalable code to bring ideas to life in the browser.
      </p>
      <p className="text-xl leading-relaxed mt-4">
        Currently pursuing a B.Tech in <span className="font-medium">Data Science & Artificial Intelligence</span>, I’m also exploring real-world applications of <span className="font-medium">machine learning</span> while diving deeper into <span className="italic">Japanese culture and language</span>.
      </p>
      <p className="text-xl leading-relaxed mt-4">
        Whether it's building intuitive UIs, experimenting with AI tools, or learning something entirely new, I'm always looking for ways to grow, connect, and contribute meaningfully.
      </p>
    </motion.div>
  );
};

export default Home;
