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
    <nav className="bg-background py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="RamHacks Logo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-white font-bold text-xl">RamHacks</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end space-x-6 flex-1">
          {["About", "Schedule", "Clubs", "Sponsors", "FAQ"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-primary-foreground transition duration-300"
            >
              {link}
            </a>
          ))}
          <Button className="bg-primary text-white hover:bg-destructive hover:text-destructive-foreground transition-colors">
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
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
            className="md:hidden py-4 bg-secondary px-4 shadow-md w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-4">
              {["About", "Schedule", "Clubs", "Sponsors", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white hover:text-muted-foreground transition duration-300 w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Button
                className="bg-primary text-white hover:bg-destructive hover:text-destructive-foreground transition-colors w-full"
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

N avbar.displayName = "Navbar";
export default Navbar;
