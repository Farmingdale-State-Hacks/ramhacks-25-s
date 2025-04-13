import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="RamHacks Logo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-ramhacks-navy font-bold text-xl">RamHacks</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {["About", "Schedule", "Clubs", "Sponsors", "FAQ"].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
            >
              {link}
            </a>
          ))}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden py-4 bg-white px-4 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {["About", "Schedule", "Clubs", "Sponsors", "FAQ"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-ramhacks-navy hover:text-ramhacks-orange transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Button
                className="bg-ramhacks-orange hover:bg-ramhacks-navy transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
