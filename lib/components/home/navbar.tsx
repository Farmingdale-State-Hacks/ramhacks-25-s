import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/047f6a0a-59a6-4473-8523-feaad297868a.png"
              alt="RamHacks Logo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-ramhacks-navy font-bold text-xl">RamHacks</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300">
            About
          </a>
          <a href="#schedule" className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300">
            Schedule
          </a>
          <a href="#clubs" className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300">
            Clubs
          </a>
          <a href="#sponsors" className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300">
            Sponsors
          </a>
          <a href="#faq" className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300">
            FAQ
          </a>
          <Button className="bg-ramhacks-orange hover:bg-ramhacks-navy transition-colors">
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-ramhacks-navy focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden py-4 bg-white px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#schedule"
              className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </a>
            <a
              href="#clubs"
              className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Clubs
            </a>
            <a
              href="#sponsors"
              className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </a>
            <a
              href="#faq"
              className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-ramhacks-orange hover:bg-ramhacks-navy transition-colors w-full">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
