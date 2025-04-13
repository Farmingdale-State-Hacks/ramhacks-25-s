import { Check } from "lucide-react";
import type React from "react";
import { Button } from "~/lib/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/lib/components/ui/card";
import { motion } from "motion/react";

export const Sponsors: React.FC = () => {
  const sponsorLevels = [
    {
      id: "platinum",
      title: "Platinum",
      price: "$5,000+",
      color: "bg-gray-800 dark:bg-gray-800",
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
      color: "bg-gray-700 dark:bg-gray-700",
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
      color: "bg-gray-600 dark:bg-gray-600",
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
      color: "bg-gray-500 dark:bg-gray-500",
      features: [
        "Logo on website",
        "Acknowledgment during event",
        "Social media mention",
      ],
    },
  ];

  const benefits = [
    {
      id: "brand-visibility",
      text: "Brand visibility to a diverse and engaged group of future tech leaders.",
    },
    {
      id: "recruitment-opportunities",
      text: "Recruitment opportunities among highly motivated and skilled students.",
    },
    {
      id: "community-support",
      text: "Support a vibrant tech community at Farmingdale State College.",
    },
    {
      id: "commitment-to-education",
      text: "Demonstrate your commitment to technology education and innovation.",
    },
    {
      id: "networking-opportunities",
      text:
        "Connect with other companies and organizations in the tech ecosystem.",
    },
  ];

  const impactStats = [
    { id: "participants", value: "150+", label: "Expected Participants" },
    { id: "projects", value: "30+", label: "Project Submissions" },
    { id: "workshops", value: "10+", label: "Workshops & Tech Talks" },
    { id: "clubs", value: "4+", label: "Technical Clubs" },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 dark:text-gray-100 mb-4">
            Sponsor FSHacks 2025
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-300 max-w-3xl mx-auto">
            Your support helps us create an inspiring environment for students to innovate
            and solve problems. Partner with FSHacks and connect with the next generation
            of tech talent.
          </p>
        </motion.div>

        {/* Benefits & Impact Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-200 dark:text-gray-100 mb-4">
              Why Sponsor FSHacks?
            </h3>
            <Card className="shadow-md border border-gray-700 dark:border-gray-700 bg-gray-700 dark:bg-gray-800">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit.id} className="flex items-start">
                      <Check className="text-gray-300 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 dark:text-gray-300">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-200 dark:text-gray-100 mb-4">
              Expected Impact
            </h3>
            <Card className="shadow-md border border-gray-700 dark:border-gray-700 bg-gray-700 dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  {impactStats.map((impact) => (
                    <motion.div
                      key={impact.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-gray-200 mb-2">
                        {impact.value}
                      </div>
                      <p className="text-gray-300 dark:text-gray-300">{impact.label}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Sponsorship Tiers Section */}
        <motion.h3
          className="text-center text-xl md:text-2xl font-bold text-gray-200 dark:text-gray-100 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sponsorship Tiers
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {sponsorLevels.map((level) => (
            <motion.div
              key={level.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow border-gray-700 h-full flex flex-col bg-gray-700 dark:bg-gray-800">
                <CardHeader className={`${level.color} text-center pb-6 rounded-t-lg`}>
                  <CardTitle className="text-2xl font-bold text-gray-200">
                    {level.title}
                  </CardTitle>
                  <CardDescription className="text-xl font-semibold text-gray-300">
                    {level.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-3">
                    {level.features.map((feature) => (
                      <li key={`${level.id}-${feature.substring(0, 10)}`} className="flex items-start">
                        <Check
                          className="text-gray-300 mr-2 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Interested in Sponsoring?
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            We're happy to discuss custom sponsorship packages that align with your
            organization's goals.
          </p>
          <Button className="bg-gray-600 hover:bg-gray-500 transition-colors text-gray-200 px-8 py-6 text-lg">
            Contact Us About Sponsorship
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

Sponsors.displayName = "Sponsors";
export default Sponsors;
