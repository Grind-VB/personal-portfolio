const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vardaan</h1>
      <ul className="flex gap-6 text-gray-700 dark:text-gray-300">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border border-gray-700 dark:border-white rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
