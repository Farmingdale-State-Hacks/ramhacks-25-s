"use client"

import { Brain, Code, ShieldCheck, Users } from "lucide-react"
import type React from "react"
import { Card, CardContent } from "~/lib/components/ui/card"
import { motion } from "framer-motion"

export const Clubs: React.FC = () => {
  const clubs = [
    {
      name: "Supporting Women in Computing (SWIC)",
      description:
        "Focused on empowering women and minorities in tech through mentorship, workshops, and networking opportunities.",
      icon: Users,
      color: "bg-pink-500",
      lightColor: "bg-pink-100",
      textColor: "text-pink-600",
      borderColor: "border-pink-200",
    },
    {
      name: "Google Developer Group (GDG)",
      description:
        "Cultivating practical software engineering skills through hands-on projects, tech talks, and collaboration with Google technologies.",
      icon: Code,
      color: "bg-green-500",
      lightColor: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      name: "Cybersecurity Club",
      description:
        "Promoting awareness of online security through capture-the-flag competitions, security workshops, and ethical hacking practices.",
      icon: ShieldCheck,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      name: "Artificial Intelligence Club",
      description:
        "Exploring trends in modern technology with a focus on machine learning, neural networks, and AI applications in various fields.",
      icon: Brain,
      color: "bg-orange-500",
      lightColor: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  return (
    <section id="clubs" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight">
            Participating <span className="text-primary">Clubs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            FSHacks brings together talented students from across Farmingdale State College, including members from
            these dynamic technology clubs.
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {clubs.map((club, index) => (
            <motion.div
              key={`${+index}-${club.name}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`Card for ${club.name}`}
              className="h-full"
            >
              <Card
                className={`h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg bg-white dark:bg-gray-800`}
              >
                <CardContent className="p-0 h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start mb-4">
                      {/* Icon */}
                      <div
                        className={`${club.color} rounded-full p-3 mr-4 flex-shrink-0 shadow-md transform transition-transform duration-300 hover:rotate-12`}
                        aria-hidden="true"
                      >
                        <club.icon size={24} className="text-white" />
                      </div>
                      {/* Club Name */}
                      <h3 className={`text-xl font-semibold ${club.textColor} dark:text-gray-100 pt-1`}>{club.name}</h3>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{club.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Join CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="text-gray-600 dark:text-gray-400 italic">
            Not a member yet? Join any of these clubs to participate in our upcoming events!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

Clubs.displayName = "Clubs"
export default Clubs
