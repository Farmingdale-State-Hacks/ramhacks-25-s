import { Brain, Code, ShieldCheck, Users } from "lucide-react";
import type React from "react";
import { Card, CardContent } from "~/lib/components/ui/card";
import { motion } from "motion/react";

export const Clubs: React.FC = () => {
  const clubs = [
    {
      name: "Supporting Women in Computing (SWIC)",
      description:
        "Focused on empowering women and minorities in tech through mentorship, workshops, and networking opportunities.",
      icon: Users,
      color: "bg-pink-500",
    },
    {
      name: "Google Developer Group (GDG)",
      description:
        "Cultivating practical software engineering skills through hands-on projects, tech talks, and collaboration with Google technologies.",
      icon: Code,
      color: "bg-green-500",
    },
    {
      name: "Cybersecurity Club",
      description:
        "Promoting awareness of online security through capture-the-flag competitions, security workshops, and ethical hacking practices.",
      icon: ShieldCheck,
      color: "bg-blue-500",
    },
    {
      name: "Artificial Intelligence Club",
      description:
        "Exploring trends in modern technology with a focus on machine learning, neural networks, and AI applications in various fields.",
      icon: Brain,
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="clubs" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Participating Clubs
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            FSHacks brings together talented students from across Farmingdale State
            College, including members from these dynamic technology clubs.
          </motion.p>
        </div>

        {/* Clubs Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
        >
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`Card for ${club.name}`}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    {/* Icon */}
                    <div
                      className={`${club.color} rounded-full p-4 mr-4 flex-shrink-0`}
                      aria-hidden="true"
                    >
                      <club.icon size={28} className="text-white" />
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        {club.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{club.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

Clubs.displayName = "Clubs";
export default Clubs;
