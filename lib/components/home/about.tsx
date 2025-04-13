import { Brain, Code, Users } from "lucide-react";
import type React from "react";
import { Card, CardContent } from "~/lib/components/ui/card";
import { motion } from "motion/react";

export const About: React.FC = () => {
  const sections = [
    {
      id: "build-innovate",
      title: "Build & Innovate",
      description:
        "Develop projects that solve real-world problems using cutting-edge technologies and creative approaches.",
      icon: <Code size={32} className="text-primary-foreground" />,
      colorClass: "bg-primary border-t-primary",
    },
    {
      id: "connect-collaborate",
      title: "Connect & Collaborate",
      description:
        "Meet like-minded students, form teams, and work together to bring your ideas to life.",
      icon: <Users size={32} className="text-destructive-foreground" />,
      colorClass: "bg-destructive border-t-destructive",
    },
    {
      id: "learn-grow",
      title: "Learn & Grow",
      description:
        "Gain valuable skills, attend workshops, and receive mentorship from industry professionals.",
      icon: <Brain size={32} className="text-accent-foreground" />,
      colorClass: "bg-accent border-t-accent",
    },
  ];

  const themes = [
    {
      id: "healthcare",
      title: "Healthcare Innovation",
      description:
        "Develop solutions to improve healthcare access, patient experience, or medical technology.",
      colorClass: "text-chart-1",
      borderClass: "border-l-4 border-chart-1",
    },
    {
      id: "sustainability",
      title: "Sustainability Tech",
      description:
        "Create projects that address environmental challenges and promote sustainable practices.",
      colorClass: "text-chart-2",
      borderClass: "border-l-4 border-chart-2",
    },
    {
      id: "education",
      title: "Education Technology",
      description:
        "Build tools and platforms that enhance learning experiences and educational outcomes.",
      colorClass: "text-primary",
      borderClass: "border-l-4 border-primary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About RamHacks
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            RamHacks is a student-run hackathon organization at Farmingdale State College.
            Our mission is to inspire innovation, foster collaboration, and build a
            vibrant tech community on campus.
          </motion.p>
        </div>

        {/* Sections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`Card for ${section.title}`}
            >
              <Card
                className={`shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 rounded-lg ${section.colorClass}`}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`w-16 h-16 ${section.colorClass.split(" ")[0]} rounded-full flex items-center justify-center`}
                      aria-hidden="true"
                    >
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 dark:text-gray-100">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Themes Section */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Hackathon Themes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={`Theme card for ${theme.title}`}
                className={`bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md ${theme.borderClass} hover:bg-gray-100 dark:hover:bg-gray-700 hover:-translate-y-[5px] transition-all duration-300`}
              >
                <h4
                  className={`text-xl font-semibold ${theme.colorClass} mb-3`}
                  aria-hidden="true"
                >
                  {theme.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

About.displayName = "About";
export default About;
