"use client"

import { Brain, Code, Users } from "lucide-react"
import type React from "react"
import { Card, CardContent } from "~/lib/components/ui/card"
import { motion } from "framer-motion"

export const About: React.FC = () => {
  const sections = [
    {
      id: "build-innovate",
      title: "Build & Innovate",
      description:
        "Develop projects that solve real-world problems using cutting-edge technologies and creative approaches.",
      icon: <Code size={32} className="text-white" />,
      colorClass: "bg-primary border-t-primary",
      gradientClass: "from-primary/10 to-transparent",
    },
    {
      id: "connect-collaborate",
      title: "Connect & Collaborate",
      description: "Meet like-minded students, form teams, and work together to bring your ideas to life.",
      icon: <Users size={32} className="text-white" />,
      colorClass: "bg-destructive border-t-destructive",
      gradientClass: "from-destructive/10 to-transparent",
    },
    {
      id: "learn-grow",
      title: "Learn & Grow",
      description: "Gain valuable skills, attend workshops, and receive mentorship from industry professionals.",
      icon: <Brain size={32} className="text-white" />,
      colorClass: "bg-accent border-t-accent",
      gradientClass: "from-accent/10 to-transparent",
    },
  ]

  const themes = [
    {
      id: "healthcare",
      title: "Healthcare Innovation",
      description: "Develop solutions to improve healthcare access, patient experience, or medical technology.",
      colorClass: "text-chart-1",
      borderClass: "border-l-4 border-chart-1",
      bgClass: "bg-chart-1/5",
      iconClass: "bg-chart-1/10",
    },
    {
      id: "sustainability",
      title: "Sustainability Tech",
      description: "Create projects that address environmental challenges and promote sustainable practices.",
      colorClass: "text-chart-2",
      borderClass: "border-l-4 border-chart-2",
      bgClass: "bg-chart-2/5",
      iconClass: "bg-chart-2/10",
    },
    {
      id: "education",
      title: "Education Technology",
      description: "Build tools and platforms that enhance learning experiences and educational outcomes.",
      colorClass: "text-primary",
      borderClass: "border-l-4 border-primary",
      bgClass: "bg-primary/5",
      iconClass: "bg-primary/10",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const drawLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  }

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <div className="inline-block mb-3">
            <motion.div
              className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight">
            About{" "}
            <span className="text-primary relative">
              RamHacks
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            RamHacks is a student-run hackathon organization at Farmingdale State College. Our mission is to inspire
            innovation, foster collaboration, and build a vibrant tech community on campus.
          </p>
        </motion.div>

        {/* Sections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`Card for ${section.title}`}
            >
              <Card
                className={`shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 rounded-lg overflow-hidden h-full ${section.colorClass} relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${section.gradientClass} opacity-50`} />
                <div className="absolute top-0 right-0 w-20 h-20 bg-white dark:bg-gray-800 rounded-bl-full opacity-20" />

                <CardContent className="pt-8 pb-6 px-6 relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`w-20 h-20 ${section.colorClass.split(" ")[0]} rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:rotate-12 relative`}
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 opacity-10" />
                      {section.icon}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white dark:border-gray-800 opacity-20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1.2, opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4 text-white">
                    {section.title}
                  </h3>
                  <p className="text-white text-center leading-relaxed">{section.description}</p>

                  {/* Decorative number */}
                  <div className="absolute bottom-3 right-3 font-bold text-4xl opacity-10 text-gray-800 dark:text-gray-200">
                    0{index + 1}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Themes Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-10 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative SVG */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M39.5,71.3c12.9-19.4,38.9-19.4,51.8,0s38.9,19.4,51.8,0s38.9-19.4,51.8,0s38.9,19.4,51.8,0"
                variants={drawLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </svg>
          </div>

          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center md:text-left flex items-center">
            <motion.span
              className="inline-block w-8 h-1 bg-primary mr-3 rounded-full md:block"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />
            Hackathon Themes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={`${theme.id}-${+index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Theme card for ${theme.title}`}
                className={`${theme.bgClass} p-6 rounded-lg shadow-md ${theme.borderClass} hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
              >
                {/* Decorative circle */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 ${theme.iconClass} rounded-full opacity-50`} />

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <h4 className={`text-xl font-semibold ${theme.colorClass}`}>{theme.title}</h4>
                  </div>
                  <p className="text-gray-800 dark:text-white leading-relaxed">{theme.description}</p>
                </div>

                {/* Decorative dots */}
                <div className="absolute bottom-2 right-2 flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`${theme.id}-${+i}`}
                      className={`w-1 h-1 rounded-full ${theme.colorClass.replace("text-", "bg-")} opacity-40`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-200">
              Join us to work on these exciting themes and more at our next hackathon!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

About.displayName = "About"
export default About
