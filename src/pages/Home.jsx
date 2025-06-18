// src/pages/Home.jsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="p-8" id="home">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Vardaan 👋
        <br />
        I'm a frontend developer with a passion for building beautiful, functional websites.
        <br />
        I also love AI and Japanese culture. Currently pursuing B.Tech in Data Science.
      </motion.h1>
    </section>
  );
};

export default Home;
