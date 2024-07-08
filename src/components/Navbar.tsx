import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.height = isOpen
        ? `${menuRef.current.scrollHeight}px`
        : '0';
    }
  }, [isOpen]);

  return (
    <nav className="p-4 sticky top-0 flex justify-between items-center w-full bg-white border-b-4 gradient-border lg:pl-40 lg:pr-40">
      <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ease-in-out ">
        <Link className="text-transparent" to="/">
          Toni Penava
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
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
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>
      <div
        ref={menuRef}
        className={`menu md:hidden ${
          isOpen ? 'menu-visible' : 'menu-hidden'
        } absolute top-16 left-0 w-full bg-white transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center text-center">
          <li className="w-full">
            <Link
              to="/"
              className="block text-black py-2 hover:underline"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/about"
              className="block text-black py-2 hover:underline"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/portfolio"
              className="block text-black py-2 hover:underline"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex md:justify-between md:items-center ">
        <ul className="flex space-x-4 text-center">
          <li>
            <Link to="/" className="text-black block hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black block hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-black block hover:underline">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
