const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-extrabold mb-10 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Project 1 */}
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition dark:border-gray-700 bg-white dark:bg-gray-800">
          <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Personal Portfolio Website</h3>
          <p className="text-md leading-relaxed mb-2">
            A fully responsive portfolio built using <strong>React</strong> and <strong>TailwindCSS</strong>, featuring a dark/light theme toggle, smooth animations with Framer Motion, and downloadable resume support. Designed to reflect my style and technical capabilities as a frontend developer.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tech: React, TailwindCSS, Vite, Framer Motion</p>
        </div>

        {/* Project 2 */}
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition dark:border-gray-700 bg-white dark:bg-gray-800">
          <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">AI-Powered Text Summarizer</h3>
          <p className="text-md leading-relaxed mb-2">
            A web app that summarizes lengthy articles and documents using <strong>HuggingFace Transformers</strong>. Designed with a clean and intuitive UI, it allows users to paste content and receive concise summaries instantly. Ideal for researchers, students, and content writers.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tech: Python, Flask, HuggingFace, HTML/CSS</p>
        </div>

        {/* Project 3 (Placeholder for scale) */}
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition dark:border-gray-700 bg-white dark:bg-gray-800">
          <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">AgryTech Showcase App</h3>
          <p className="text-md leading-relaxed mb-2">
            A mobile-first showcase app built with <strong>Flutter</strong> to promote smart agricultural storage solutions. Features product visuals, metrics, contact forms, and a simple dashboard-style layout designed to be user-friendly for Indian rural users.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tech: Flutter, Dart, Material Design</p>
        </div>

        {/* Project 4 (Placeholder for scale) */}
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition dark:border-gray-700 bg-white dark:bg-gray-800">
          <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">FarmConnect App</h3>
          <p className="text-md leading-relaxed mb-2">
            A networking app for farmers, cold storage owners, and bulk buyers. Enables resource sharing, product discovery, and location-based interaction through a cozy and accessible Flutter interface built for real-world field use.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tech: Flutter, Firebase (optional), Dart</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
