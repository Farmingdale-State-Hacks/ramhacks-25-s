"use client"

import type React from "react"
import { Button } from "~/lib/components/ui/button"
import { Calendar, ChevronRight, Sparkles, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"

export const Hero: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center text-white py-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ramhacks-navy via-ramhacks-navy/95 to-ramhacks-navy/90 z-0">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Decorative circles */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-ramhacks-orange/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo Section */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-ramhacks-orange/20 via-white/20 to-ramhacks-orange/20 blur-md"
              initial="hidden"
              animate="visible"
            />
            <img src="/assets/images/logo.png" alt="RamHacks Logo" className="h-32 md:h-40 w-auto relative" />
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          RamHacks <span className="text-ramhacks-orange">2025</span>
          <motion.div
            className="absolute -top-6 -right-6 text-ramhacks-orange"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <Sparkles className="h-8 w-8" />
          </motion.div>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-white via-white to-ramhacks-orange bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Fueling Innovation at Farmingdale State College
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join us for an exciting 24-hour hackathon where creativity meets technology. Build, learn, and network with
          fellow innovators!
        </motion.p>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <div className="bg-white/10 rounded-full p-3 mb-2">
              <Calendar className="h-6 w-6 text-ramhacks-orange" />
            </div>
            <span className="text-xl font-medium">April 26-27, 2025</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <div className="bg-white/10 rounded-full p-3 mb-2">
              <MapPin className="h-6 w-6 text-ramhacks-orange" />
            </div>
            <span className="text-xl font-medium">Farmingdale Campus</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <div className="bg-white/10 rounded-full p-3 mb-2">
              <Users className="h-6 w-6 text-ramhacks-orange" />
            </div>
            <span className="text-xl font-medium">150+ Participants</span>
          </motion.div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-ramhacks-orange hover:bg-white hover:text-ramhacks-orange text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-ramhacks-orange/20 flex items-center">
              Register Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-ramhacks-navy text-lg px-8 py-6 rounded-full shadow-lg flex items-center"
            >
              Sponsor Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

Hero.displayName = "Hero"
export default Hero
