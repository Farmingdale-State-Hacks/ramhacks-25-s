import { Link } from "@tanstack/react-router";
import { Calendar, Link as LinkIcon, Mail } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-500 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Logo and Contact Section */}
          <motion.div
            className="col-span-1 md:col-span-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/assets/images/logo.png"
                alt="RamHacks Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="font-bold text-xl">RamHacks</span>
            </Link>
            <p className="text-gray-300 mb-4">
              A student-run hackathon at Farmingdale State College fostering innovation
              and technical skills.
            </p>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-ramhacks-orange" size={18} />
              <span>April 26, 2025</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 text-ramhacks-orange" size={18} />
              <a
                href="mailto:ferdt4@farmingdale.edu"
                className="hover:text-ramhacks-orange transition-colors"
              >
                ferdt4@farmingdale.edu
              </a>
            </div>
            <div className="flex items-center mb-2">
              <LinkIcon className="mr-2 text-ramhacks-orange" size={18} />
              <a href="/" className="hover:text-ramhacks-orange transition-colors">
                www.ramhacks.com
              </a>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-ramhacks-orange">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <a
                href="https://github.com/Farmingdale-State-Hacks/ramhacks-25-s"
                className="hover:text-ramhacks-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="col-span-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Schedule", "Clubs", "Sponsors", "FAQ"].map((link, index) => (
                <li key={`${link}-${+index}`}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-ramhacks-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Participating Clubs Section */}
          <motion.div
            className="col-span-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="font-bold text-lg mb-4">Participating Clubs</h3>
            <ul className="space-y-2">
              {[
                { name: "Supporting Women in Computing", link: "https://farmingdale.campuslabs.com/engage/organization/swic" },
                { name: "Google Developer Group", link: "https://farmingdale.campuslabs.com/engage/organization/farmingdalegdsc" },
                { name: "Cybersecurity Club", link: "https://farmingdale.campuslabs.com/engage/organization/csc" },
                { name: "Artificial Intelligence Club", link: "https://farmingdale.campuslabs.com/engage/organization/aic" },
              ].map((club, index) => (
                <li key={`${club.name}-${+index}`}>
                  <a href={club.link} className="hover:text-ramhacks-orange transition-colors" target="_blank" rel="noopener noreferrer">
                    {club.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get Involved Section */}
          <motion.div
            className="col-span-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {[
                { name: "Register as Participant", link: "https://forms.gle/Xp6nnGfTPvzb7hFM9" },
                { name: "Become a Sponsor", link: "mailto:ferdt4@farmingdale.edu" },
              ].map((action, index) => (
                <li key={`${action.name}-${+index}`}>
                  <a
                    href={action.link}
                    className="hover:text-ramhacks-orange transition-colors"
                    target={action.link.startsWith("mailto") ? "_blank" : undefined}
                    rel={action.link.startsWith("mailto") ? "noreferrer" : undefined}
                  >
                    {action.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FSHacks at Farmingdale State College. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;
