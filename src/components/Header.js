import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-2 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold flex items-center">
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt=""
            className="w-16 h-16 ml-2 mr-4"
            style={{ animation: 'fadeIn 2s ease-in-out' }}
          />
          <div className='ml-2 md:ml-[400px]'>
            <SearchBar />
          </div>
        </div>

        
        <button
          className="md:hidden mr-3 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FiMenu size={24} />
        </button>
      </div>

      
      <nav className={`text-white ${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-14 left-0 right-0 bg-gray-800 px-4 py-2 transition-all duration-300`}>
        <Link
          to="/"
          className="block text-center py-2 hover:text-yellow-300 border-b border-white transition-colors duration-300"
        >
          All Players
        </Link>
        <Link
          to="/rank/90"
          className="block text-center py-2 hover:text-yellow-300 border-b border-white transition-colors duration-300"
        >
          Rank: 90+
        </Link>
        <Link
          to="/rank/85"
          className="block text-center py-2 hover:text-yellow-300 border-b border-white transition-colors duration-300"
        >
          Rank: 85+
        </Link>
        <Link
          to="/rank/80"
          className="block text-center py-2 hover:text-yellow-300 border-b border-white transition-colors duration-300"
        >
          Rank: 80+
        </Link>
        <Link
          to="/rank/75"
          className="block text-center py-2 hover:text-yellow-300 transition-colors duration-300"
        >
          Rank: 75+
        </Link>
      </nav>

     
      <nav className="hidden text-blue-50 md:mr-6 md:flex md:items-center md:space-x-4">
        <Link
          to="/"
          className="cursor-pointer hover:text-yellow-300 border-r pr-3 border-r-blue-700 transition-colors duration-300"
        >
          All Players
        </Link>
        <Link
          to="/rank/90"
          className="cursor-pointer hover:text-yellow-300 border-r pr-3 border-r-blue-700 transition-colors duration-300"
        >
          Rank: 90+
        </Link>
        <Link
          to="/rank/85"
          className="cursor-pointer hover:text-yellow-300 border-r pr-3 border-r-blue-700 transition-colors duration-300"
        >
          Rank: 85+
        </Link>
        <Link
          to="/rank/80"
          className="cursor-pointer hover:text-yellow-300 border-r pr-3 border-r-blue-700 transition-colors duration-300"
        >
          Rank: 80+
        </Link>
        <Link
          to="/rank/75"
          className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
        >
          Rank: 75+
        </Link>
      </nav>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
