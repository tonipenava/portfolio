import React, { useState, useEffect } from 'react';
import githubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';

const navList = [
  { id: 'home', label: 'Početna' },
  { id: 'about', label: 'O meni' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Kontakt' },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    setIsSmallScreen(mediaQuery.matches);

    const handler = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(handler);

    return () => mediaQuery.removeListener(handler);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.12,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-dark-crna text-crna dark:bg-bijela dark:text-crna  h-[12vh] w-full sticky top-0 flex items-center justify-evenly z-50 lg:flex lg:justify-evenly bg-opacity-95">
      <div
        onClick={() => handleItemClick('home')}
        className="lg:w-[1/2] w-[1/3] flex items-center justify-start  lg:p-5 cursor-pointer"
      >
        <div className="lg:w-[30dvw] text-3xl lg:flex lg:justify-start lg:items-center font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ease-in-out pt-5  ">
          <h2 className="text-transparent lg:text-start text-center pb-5 ">
            Toni Penava
          </h2>
        </div>
      </div>

      {!isSmallScreen && (
        <ul className="hidden lg:flex lg:items-center lg:justify-start rounded-b-lg lg:gap-10 text-lg text-zinc-900 bg-zelena opacity-80 lg:bg-transparent pr-5">
          {navList.map((item) => (
            <div
              key={item.id}
              className="rounded-sm p-2 hover:bg-zinc-50 hover:text-svjetlozelena cursor-pointer font-medium text-center"
              role="button"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </div>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tonipenava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white block hover:text-orange-400"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-6 h-6 hover:scale-110 transition-all hover:bg-orange-400 hover:rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/toni-penava-28aa08303/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white block hover:underline"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-all hover:bg-blue-400 hover:rounded-sm"
              />
            </a>
          </div>
        </ul>
      )}

      <div className="block lg:hidden pr-4">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isSmallScreen && (
        <ul
          style={{
            height: isMenuOpen ? '40vh' : '0px',
            transition: 'height 0.25s ease-in-out',
            overflow: 'hidden',
          }}
          className="lg:hidden text-xl text-zinc-900 bg-bijela opacity-80 w-screen absolute top-[12vh] grid grid-cols-1 grid-rows-5 gap-1"
        >
          {navList.map((item) => (
            <li
              key={item.id}
              className="rounded-sm p-2 hover:bg-zinc-50 hover:text-plava font-medium text-center"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={toggleDarkMode}
        className="text-black dark:text-white ml-4 p-2 rounded transition-colors duration-300"
      >
        {darkMode ? '🌞' : '🌜'}
      </button>
    </nav>
  );
};

export default Navbar;
