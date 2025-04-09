
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Users, Code, ShieldCheck, Brain } from 'lucide-react';

export const Clubs: React.FC = () => {
  const clubs = [
    {
      name: 'Supporting Women in Computing (SWIC)',
      description: 'Focused on empowering women and minorities in tech through mentorship, workshops, and networking opportunities.',
      icon: Users,
      color: 'bg-pink-500'
    },
    {
      name: 'Google Developer Group (GDG)',
      description: 'Cultivating practical software engineering skills through hands-on projects, tech talks, and collaboration with Google technologies.',
      icon: Code,
      color: 'bg-green-500'
    },
    {
      name: 'Cybersecurity Club',
      description: 'Promoting awareness of online security through capture-the-flag competitions, security workshops, and ethical hacking practices.',
      icon: ShieldCheck,
      color: 'bg-fshacks-blue'
    },
    {
      name: 'Artificial Intelligence Club',
      description: 'Exploring trends in modern technology with a focus on machine learning, neural networks, and AI applications in various fields.',
      icon: Brain,
      color: 'bg-fshacks-orange'
    }
  ];

  return (
    <section id="clubs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fshacks-navy mb-4">Participating Clubs</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            FSHacks brings together talented students from across Farmingdale State College,
            including members from these dynamic technology clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clubs.map((club, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className={`${club.color} rounded-full p-3 mr-4 flex-shrink-0`}>
                    <club.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-fshacks-navy mb-2">{club.name}</h3>
                    <p className="text-gray-600">{club.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

Clubs.displayName = 'Clubs';
export default Clubs;