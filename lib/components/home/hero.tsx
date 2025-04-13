import type React from "react";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <div className="hero-pattern min-h-[85vh] flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/assets/images/logo.png"
            alt="RamHacks Logo"
            className="h-32 md:h-40 w-auto"
          />
        </motion.div>

        {/* Title Section */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          RamHacks 2025
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Fueling Innovation at Farmingdale State College
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join us for an exciting 24-hour hackathon where creativity meets technology.
          Build, learn, and network with fellow innovators!
        </motion.p>

        {/* Date Section */}
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Calendar className="mr-2" />
          <span className="text-xl font-medium">April 26-27, 2025</span>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button className="bg-ramhacks-orange hover:bg-white hover:text-ramhacks-orange text-white text-lg px-8 py-6">
            Register Now
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-ramhacks-navy text-lg px-8 py-6"
          >
            Sponsor Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";
export default Hero;
