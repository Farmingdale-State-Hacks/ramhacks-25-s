import { Link } from "@tanstack/react-router";
import { Calendar, Link as LinkIcon, Mail } from "lucide-react";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ramhacks-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
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
              <span>April 27, 2025</span>
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
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-fshacks-orange transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-fshacks-orange transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a href="#clubs" className="hover:text-fshacks-orange transition-colors">
                  Clubs
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="hover:text-fshacks-orange transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-fshacks-orange transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Participating Clubs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Supporting Women in Computing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Google Developer Group
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Cybersecurity Club
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Artificial Intelligence Club
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Register as Participant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Become a Sponsor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fshacks-orange transition-colors">
                  Mentor at FSHacks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FSHacks at Farmingdale State College. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;
