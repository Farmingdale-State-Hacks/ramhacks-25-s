
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";
import { Button } from '../ui/button';

export const Schedule: React.FC = () => {
  // Define dates for the hackathon (April 27-28, 2025)
  const hackathonStartDate = new Date(2025, 3, 27); // April 27, 2025
  const hackathonEndDate = new Date(2025, 3, 28); // April 28, 2025

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<Date>(hackathonStartDate);

  // Schedule items for each day
  const firstDaySchedule = [
    { time: '8:00 AM', event: 'Check-in & Registration', description: 'Pick up your badge and swag' },
    { time: '9:00 AM', event: 'Opening Ceremony', description: 'Welcome address and sponsor introductions' },
    { time: '10:00 AM', event: 'Team Formation', description: 'Find teammates and brainstorm project ideas' },
    { time: '11:00 AM', event: 'Hacking Begins', description: 'Start building your projects' },
    { time: '12:00 PM', event: 'Lunch', description: 'Food and refreshments provided' },
    { time: '2:00 PM', event: 'Workshop: AI Development', description: 'Learn about the latest AI tools and techniques' },
    { time: '4:00 PM', event: 'Workshop: UI/UX Design', description: 'Principles of effective user interface design' },
    { time: '6:00 PM', event: 'Dinner', description: 'Evening meal and networking' },
    { time: '8:00 PM', event: 'Mentor Sessions', description: 'Get advice from industry professionals' },
    { time: '11:00 PM', event: 'Late Night Snacks', description: 'Fuel up for the night ahead' },
  ];

  const secondDaySchedule = [
    { time: '8:00 AM', event: 'Breakfast', description: 'Start the second day with energy' },
    { time: '10:00 AM', event: 'Hacking Ends', description: 'Finalize your projects and prepare presentations' },
    { time: '11:00 AM', event: 'Project Presentations', description: 'Showcase your work to judges and peers' },
    { time: '1:00 PM', event: 'Judging', description: 'Projects are evaluated by our panel of experts' },
    { time: '2:30 PM', event: 'Closing Ceremony', description: 'Awards announcement and final remarks' },
  ];

  // Determine which schedule to display based on selected date
  const scheduleItems = selectedDate.getDate() === hackathonStartDate.getDate()
    ? firstDaySchedule
    : secondDaySchedule;

  return (
    <section id="schedule" className="py-20 bg-ramhacks-navy bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ramhacks-navy mb-4">Event Schedule</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us for 24 hours of coding, learning, and innovation.
            Here's what you can expect at RamHacks 2025.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Day switching buttons */}
          <div className="flex justify-center mb-8 space-x-4">
            <Button
              variant={selectedDate.getDate() === hackathonStartDate.getDate() ? "default" : "outline"}
              className={selectedDate.getDate() === hackathonStartDate.getDate()
                ? "bg-ramhacks-orange hover:bg-ramhacks-navy text-white"
                : "border-ramhacks-navy text-ramhacks-navy hover:bg-ramhacks-navy hover:text-white"
              }
              onClick={() => setSelectedDate(hackathonStartDate)}
            >
              Day 1 (April 27)
            </Button>
            <Button
              variant={selectedDate.getDate() === hackathonEndDate.getDate() ? "default" : "outline"}
              className={selectedDate.getDate() === hackathonEndDate.getDate()
                ? "bg-ramhacks-orange hover:bg-ramhacks-navy text-white"
                : "border-ramhacks-navy text-ramhacks-navy hover:bg-ramhacks-navy hover:text-white"
              }
              onClick={() => setSelectedDate(hackathonEndDate)}
            >
              Day 2 (April 28)
            </Button>
          </div>

          {/* Timetable schedule display */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Table>
              <TableHeader className="bg-ramhacks-navy bg-opacity-10">
                <TableRow>
                  <TableHead className="w-1/6 text-ramhacks-navy">Time</TableHead>
                  <TableHead className="w-1/3 text-ramhacks-navy">Event</TableHead>
                  <TableHead className="text-ramhacks-navy">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleItems.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <TableCell className="font-medium text-ramhacks-orange">{item.time}</TableCell>
                    <TableCell className="font-semibold text-ramhacks-navy">{item.event}</TableCell>
                    <TableCell className="text-gray-600">{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

Schedule.displayName = 'Schedule';
export default Schedule;
