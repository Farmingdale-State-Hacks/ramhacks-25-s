
import React from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Check } from 'lucide-react';

export const Sponsors: React.FC = () => {
  const sponsorLevels = [
    {
      title: 'Platinum',
      price: '$5,000+',
      color: 'bg-gradient-to-br from-gray-200 to-gray-400',
      features: [
        'Prime logo placement on website and event materials',
        'Dedicated sponsor table at event',
        'Speaking opportunity during opening ceremony',
        'Access to participant resumes',
        'Social media promotion (5+ posts)',
        'Branded prize category',
        'Recruitment access during event',
        '5 branded items in swag bags'
      ]
    },
    {
      title: 'Gold',
      price: '$2,500',
      color: 'bg-gradient-to-br from-amber-200 to-amber-400',
      features: [
        'Featured logo on website and event materials',
        'Sponsor table at event',
        'Brief speaking opportunity',
        'Access to participant resumes',
        'Social media promotion (3+ posts)',
        'Recruitment access during event',
        '3 branded items in swag bags'
      ]
    },
    {
      title: 'Silver',
      price: '$1,000',
      color: 'bg-gradient-to-br from-gray-100 to-gray-300',
      features: [
        'Logo on website and event materials',
        'Shared sponsor table',
        'Social media promotion (1+ post)',
        'Recruitment access during event',
        '1 branded item in swag bags'
      ]
    },
    {
      title: 'Bronze',
      price: '$500',
      color: 'bg-gradient-to-br from-amber-100 to-amber-300',
      features: [
        'Logo on website',
        'Acknowledgment during event',
        'Social media mention'
      ]
    }
  ];

  const benefits = [
    'Brand visibility to a diverse and engaged group of future tech leaders',
    'Recruitment opportunities among highly motivated and skilled students',
    'Support a vibrant tech community at Farmingdale State College',
    'Demonstrate your commitment to technology education and innovation',
    'Connect with other companies and organizations in the tech ecosystem'
  ];

  return (
    <section id="sponsors" className="py-20 bg-fshacks-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fshacks-navy mb-4">Sponsor FSHacks 2025</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your support helps us create an inspiring environment for students to innovate and solve problems.
            Partner with FSHacks and connect with the next generation of tech talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-fshacks-navy mb-4">Why Sponsor FSHacks?</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-fshacks-orange mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-fshacks-navy mb-4">Expected Impact</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-fshacks-blue mb-2">150+</div>
                  <p className="text-gray-700">Expected Participants</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fshacks-blue mb-2">30+</div>
                  <p className="text-gray-700">Project Submissions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fshacks-blue mb-2">10+</div>
                  <p className="text-gray-700">Workshops & Tech Talks</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fshacks-blue mb-2">4+</div>
                  <p className="text-gray-700">Technical Clubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-fshacks-navy mb-6 text-center">Sponsorship Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsorLevels.map((level, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className={`${level.color} text-center py-6`}>
                <CardTitle className="text-2xl font-bold text-fshacks-navy">{level.title}</CardTitle>
                <CardDescription className="text-xl font-semibold text-fshacks-navy">{level.price}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-fshacks-orange mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-fshacks-navy mb-4">Interested in Sponsoring?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            We're happy to discuss custom sponsorship packages that align with your organization's goals.
          </p>
          <Button className="bg-fshacks-orange hover:bg-fshacks-navy transition-colors text-white px-8 py-6 text-lg">
            Contact Us About Sponsorship
          </Button>
        </div>
      </div>
    </section>
  );
};

Sponsors.displayName = 'Sponsors';
export default Sponsors;
