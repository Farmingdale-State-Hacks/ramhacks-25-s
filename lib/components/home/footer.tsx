import { Link } from "@tanstack/react-router";
import { Calendar, Link as LinkIcon, Mail } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ramhacks-navy text-white py-12">
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
                src="/assets/images/logo.png>>>>>>> master
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
                href="mailto:info@ramhacks.org"
                className="hover:text-ramhacks-orange transition-colors"
              >
                info@ramhacks.org
              </a>
            </div>
            <div className="flex items-center">
              <LinkIcon className="mr-2 text-ramhacks-orange" size={18} />
              <a href="#" className="hover:text-ramhacks-orange transition-colors">
                www.ramhacks.org
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
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-fshacks-orange transition-colors"
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
                "Supporting Women in Computing",
                "Google Developer Group",
                "Cybersecurity Club",
                "Artificial Intelligence Club",
              ].map((club, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-fshacks-orange transition-colors">
                    {club}
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
                "Register as Participant",
                "Become a Sponsor",
                "Volunteer Opportunities",
                "Mentor at FSHacks",
              ].map((action, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-fshacks-orange transition-colors">
                    {action}
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
