"use client"

import { Code2, ShieldCheck, Sparkles, Terminal } from "lucide-react"
import type React from "react"
import { Card, CardContent } from "~/lib/components/ui/card"
import { motion, type Variants } from "motion/react"

export const Clubs: React.FC = () => {
  const clubs = [
    {
      id: "gdsc",
      name: "Google Developer Student Club",
      shortName: "GDSC FSC",
      description: "A community group for students interested in Google developer technologies. All students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.",
      icon: <Terminal className="size-6" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: "acm",
      name: "Association for Computing Machinery",
      shortName: "ACM Chapter",
      description: "The world's largest educational and scientific computing society. Our campus chapter provides resources, networking, and technical workshops to advance computing as a science and profession.",
      icon: <Code2 className="size-6" />,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
    },
    {
      id: "cyber",
      name: "Cybersecurity Club",
      shortName: "Cyber FSC",
      description: "Dedicated to training the next generation of security professionals. We compete in CTF competitions, practice ethical hacking, and explore network defense and digital forensics.",
      icon: <ShieldCheck className="size-6" />,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
    },
    {
      id: "wic",
      name: "Women in Computing",
      shortName: "WiC FSC",
      description: "Supporting, celebrating, and encouraging the inclusion of women in tech. We provide mentorship, career guidance, technical skill-building, and a strong community network.",
      icon: <Sparkles className="size-6" />,
      color: "bg-orange-500",
      lightColor: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ]

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
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
                        className={`${club.color} rounded-full p-3 mr-4 flex-shrink-0 shadow-md transform transition-transform duration-300 hover:rotate-12 flex items-center justify-center text-white`}
                        aria-hidden="true"
                      >
                        {club.icon}
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
