
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a collaborative event where participants come together to solve problems and build innovative projects in a limited amount of time. It's an opportunity to learn new skills, meet like-minded individuals, and create something amazing!"
    },
    {
      question: "Who can participate in FSHacks?",
      answer: "FSHacks is primarily for Farmingdale State College students, but we welcome participants from other colleges as well. You don't need to be a computer science major—students from all disciplines are encouraged to join!"
    },
    {
      question: "Do I need to know how to code?",
      answer: "While coding skills are helpful, they're not required. Hackathons benefit from diverse skill sets including design, business, and domain expertise. We'll have workshops and mentors to help you learn and contribute regardless of your technical background."
    },
    {
      question: "Do I need to have a team?",
      answer: "No, you don't need to have a team beforehand. We'll have a team formation session at the beginning of the event where you can meet other participants and form teams. You can also work individually if you prefer."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and any other personal items you might need. We'll provide food, drinks, and a comfortable space to work."
    },
    {
      question: "Is there a cost to participate?",
      answer: "No, FSHacks is completely free for all participants. Food, drinks, and swag are provided at no cost, thanks to our generous sponsors."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We'll have various prize categories including Best Overall, Most Innovative, Best UI/UX, and sponsor-specific categories. Prizes include tech gadgets, gift cards, and opportunities for internships or mentorship."
    },
    {
      question: "How can my company sponsor FSHacks?",
      answer: "We offer various sponsorship tiers with different benefits. Please contact us at sponsors@fshacks.org to discuss sponsorship opportunities tailored to your organization's needs."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fshacks-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about FSHacks? Find answers to common questions below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-fshacks-navy font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Still have questions? Feel free to reach out!
          </p>
          <a
            href="mailto:info@fshacks.org"
            className="text-fshacks-blue hover:text-fshacks-orange transition-colors font-medium"
          >
            info@fshacks.org
          </a>
        </div>
      </div>
    </section>
  );
};

FAQ.displayName = 'FAQ';
export default FAQ;
