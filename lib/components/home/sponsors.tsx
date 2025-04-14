"use client"

import { Check, Award, Users, Code, Zap } from 'lucide-react'
import type React from "react"
import { Button } from "~/lib/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/lib/components/ui/card"
import { motion } from "framer-motion"

export const Sponsors: React.FC = () => {
  const sponsorLevels = [
    {
      id: "platinum",
      title: "Platinum",
      price: "$5,000+",
      color: "bg-gray-800 dark:bg-gray-700",
      borderColor: "border-gray-600",
      icon: <Award className="h-8 w-8 text-white mb-2" />,
      features: [
        "Prime logo placement on website and event materials",
        "Dedicated sponsor table at event",
        "Speaking opportunity during opening ceremony",
        "Access to participant resumes",
        "Social media promotion (5+ posts)",
        "Branded prize category",
        "Recruitment access during event",
        "5 branded items in swag bags",
      ],
    },
    {
      id: "gold",
      title: "Gold",
      price: "$2,500",
      color: "bg-amber-600 dark:bg-amber-700",
      borderColor: "border-amber-500",
      icon: <Award className="h-8 w-8 text-white mb-2" />,
      features: [
        "Featured logo on website and event materials",
        "Sponsor table at event",
        "Brief speaking opportunity",
        "Access to participant resumes",
        "Social media promotion (3+ posts)",
        "Recruitment access during event",
        "3 branded items in swag bags",
      ],
    },
    {
      id: "silver",
      title: "Silver",
      price: "$1,000",
      color: "bg-gray-400 dark:bg-gray-500",
      borderColor: "border-gray-400",
      icon: <Award className="h-8 w-8 text-white mb-2" />,
      features: [
        "Logo on website and event materials",
        "Shared sponsor table",
        "Social media promotion (1+ post)",
        "Recruitment access during event",
        "1 branded item in swag bags",
      ],
    },
    {
      id: "bronze",
      title: "Bronze",
      price: "$500",
      color: "bg-amber-700 dark:bg-amber-800",
      borderColor: "border-amber-600",
      icon: <Award className="h-8 w-8 text-white mb-2" />,
      features: [
        "Logo on website",
        "Acknowledgment during event",
        "Social media mention",
      ],
    },
  ]

  const benefits = [
    {
      id: "brand-visibility",
      icon: <Zap size={20} className="text-amber-400" />,
      text: "Brand visibility to a diverse and engaged group of future tech leaders.",
    },
    {
      id: "recruitment-opportunities",
      icon: <Users size={20} className="text-amber-400" />,
      text: "Recruitment opportunities among highly motivated and skilled students.",
    },
    {
      id: "community-support",
      icon: <Users size={20} className="text-amber-400" />,
      text: "Support a vibrant tech community at Farmingdale State College.",
    },
    {
      id: "commitment-to-education",
      icon: <Code size={20} className="text-amber-400" />,
      text: "Demonstrate your commitment to technology education and innovation.",
    },
    {
      id: "networking-opportunities",
      icon: <Users size={20} className="text-amber-400" />,
      text: "Connect with other companies and organizations in the tech ecosystem.",
    },
  ]

  const impactStats = [
    { id: "participants", value: "150+", label: "Expected Participants", icon: <Users size={24} /> },
    { id: "projects", value: "30+", label: "Project Submissions", icon: <Code size={24} /> },
    { id: "workshops", value: "10+", label: "Workshops & Tech Talks", icon: <Zap size={24} /> },
    { id: "clubs", value: "4+", label: "Technical Clubs", icon: <Users size={24} /> },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="sponsors" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <motion.div
              className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight">
            Sponsor <span className="text-amber-500">FSHacks 2025</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your support helps us create an inspiring environment for students to innovate and solve problems.
            Partner with FSHacks and connect with the next generation of tech talent.
          </p>
        </motion.div>

        {/* Benefits & Impact Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                <Check className="text-amber-500 dark:text-amber-400 h-5 w-5" />
              </span>
              Why Sponsor FSHacks?
            </h3>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardContent className="pt-8 pb-6">
                <ul className="space-y-5">
                  {benefits.map((benefit) => (
                    <li key={benefit.id} className="flex items-start">
                      <div className="mr-3 flex-shrink-0 mt-1 w-6 h-6 bg-amber-500/10 rounded-full flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-200">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                <Users className="text-amber-500 dark:text-amber-400 h-5 w-5" />
              </span>
              Expected Impact
            </h3>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-500"></div>
              <CardContent className="pt-8 pb-6">
                <div className="grid grid-cols-2 gap-8">
                  {impactStats.map((impact) => (
                    <div key={impact.id} className="text-center">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-500 dark:text-amber-400">
                        {impact.icon}
                      </div>
                      <div className="text-3xl font-bold text-amber-500 dark:text-amber-400 mb-1">{impact.value}</div>
                      <p className="text-gray-700 dark:text-gray-300">{impact.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Sponsorship Tiers Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Sponsorship Tiers</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Choose the sponsorship level that aligns with your organization's goals and budget.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {sponsorLevels.map((level, index) => (
            <motion.div
              key={level.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className={`shadow-xl border ${level.borderColor} h-full flex flex-col ${level.color} relative overflow-hidden`}>
                <CardHeader className="relative z-10 text-center py-8 border-b border-gray-300/30 dark:border-gray-600/30">
                  <div className="flex justify-center mb-2">{level.icon}</div>
                  <CardTitle className="text-2xl font-bold text-gray-100">{level.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-amber-400 mt-1">
                    {level.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-8 flex-grow relative z-10">
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <motion.li
                        key={`${level.id}-${featureIndex}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-start"
                      >
                        <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <Check className="text-amber-400 h-3 w-3" />
                        </div>
                        <span className="text-sm text-white">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                {/* Decorative number */}
                <div className="absolute bottom-3 right-3 font-bold text-6xl opacity-5 text-white">
                  0{index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Interested in Sponsoring?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            We're happy to discuss custom sponsorship packages that align with your
            organization's goals and create a mutually beneficial partnership.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-500 transition-colors text-white px-8 py-6 text-lg rounded-full shadow-lg">
            Contact Us About Sponsorship
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

Sponsors.displayName = "Sponsors"
export default Sponsors
