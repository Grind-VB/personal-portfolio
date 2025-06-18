import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          <Link to="/">Vardaan</Link>
        </h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-black dark:text-white" /> : <Menu className="text-black dark:text-white" />}
          </button>
        </div>
        <ul className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-300">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
          <ThemeToggle />
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 dark:text-gray-300">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
