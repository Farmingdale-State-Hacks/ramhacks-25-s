import type React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/lib/components/ui/accordion";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is a collaborative event where participants come together to solve problems and build innovative projects in a limited amount of time.",
    },
    {
      question: "Who can participate in FSHacks?",
      answer:
        "FSHacks is primarily for Farmingdale State College students, but we welcome participants from other colleges as well.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "While coding skills are helpful, they're not required. Hackathons benefit from diverse skill sets including design, business, and domain expertise.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "No, you don't need to have a team beforehand. We'll have a team formation session at the beginning of the event.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, student ID, and any other personal items you might need.",
    },
    {
      question: "Is there a cost to participate?",
      answer:
        "No, FSHacks is completely free for all participants thanks to our generous sponsors.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! We'll have various prize categories including Best Overall, Most Innovative, Best UI/UX, and sponsor-specific categories.",
    },
    {
      question: "How can my company sponsor FSHacks?",
      answer:
        "Please contact us at sponsors@fshacks.org to discuss sponsorship opportunities tailored to your organization's needs.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Frequently Asked
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about FSHacks? Find answers to common questions below.
          </p>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary-color transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? Feel free to reach out!
          </p>
          <a
            href="mailto:info@fshacks.org"
            className="text-primary-color hover:text-accent-color transition-colors font-medium"
          >
            info@fshacks.org
          </a>
        </motion.div>
      </div>
    </section>
  );
};

FAQ.displayName = "FAQ";
export default FAQ;
