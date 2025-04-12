
import type React from 'react';
import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="hero-pattern min-h-[85vh] flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/assets/images/logo.png"
            alt="RamHacks Logo"
            className="h-32 md:h-40 w-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">RamHacks 2025</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Fueling Innovation at Farmingdale State College</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join us for an exciting 24-hour hackathon where creativity meets technology.
          Build, learn, and network with fellow innovators!
        </p>
        <div className="flex items-center justify-center mb-10">
          <Calendar className="mr-2" />
          <span className="text-xl font-medium">April 27-28, 2025</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-ramhacks-orange hover:bg-white hover:text-ramhacks-orange text-white text-lg px-8 py-6">
            Register Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ramhacks-navy text-lg px-8 py-6">
            Sponsor Us
          </Button>
        </div>
      </div>
    </div>
  );
};

Hero.displayName = 'Hero';
export default Hero;
