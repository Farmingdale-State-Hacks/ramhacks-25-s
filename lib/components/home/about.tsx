import { Brain, Code, Users } from "lucide-react";
import type React from "react";
import { Card, CardContent } from "~/lib/components/ui/card";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ramhacks-navy mb-4">
            About RamHacks
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            RamHacks is a student-run hackathon organization at Farmingdale State College.
            Our mission is to inspire innovation, foster collaboration, and build a
            vibrant tech community on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-fshacks-blue">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-fshacks-blue rounded-full flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Build & Innovate</h3>
              <p className="text-gray-600 text-center">
                Develop projects that solve real-world problems using cutting-edge
                technologies and creative approaches.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-fshacks-orange">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-fshacks-orange rounded-full flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Connect & Collaborate
              </h3>
              <p className="text-gray-600 text-center">
                Meet like-minded students, form teams, and work together to bring your
                ideas to life.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-fshacks-navy">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-fshacks-navy rounded-full flex items-center justify-center">
                  <Brain size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Learn & Grow</h3>
              <p className="text-gray-600 text-center">
                Gain valuable skills, attend workshops, and receive mentorship from
                industry professionals.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-fshacks-gray rounded-lg p-8">
          <h3 className="text-2xl font-bold text-fshacks-navy mb-4">Hackathon Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-fshacks-blue mb-2">
                Healthcare Innovation
              </h4>
              <p className="text-gray-600">
                Develop solutions to improve healthcare access, patient experience, or
                medical technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-fshacks-blue mb-2">
                Sustainability Tech
              </h4>
              <p className="text-gray-600">
                Create projects that address environmental challenges and promote
                sustainable practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-fshacks-blue mb-2">
                Education Technology
              </h4>
              <p className="text-gray-600">
                Build tools and platforms that enhance learning experiences and
                educational outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.displayName = "About";
export default About;
