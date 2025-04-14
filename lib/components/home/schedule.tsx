import type React from "react";
import { useState } from "react";
import { Button } from "~/lib/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { motion } from "motion/react";

export const Schedule: React.FC = () => {
  // Define dates for the hackathon (April 26-27, 2025)
  const hackathonStartDate = new Date(2025, 3, 26);
  const hackathonEndDate = new Date(2025, 3, 27);

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<Date>(hackathonStartDate);

  // Schedule items for each day
  const firstDaySchedule = [
    { time: "8:00 AM", event: "Check-in & Registration", description: "Pick up your badge and swag" },
    { time: "9:00 AM", event: "Opening Ceremony", description: "Welcome address and sponsor introductions" },
    { time: "10:00 AM", event: "Team Formation", description: "Find teammates and brainstorm project ideas" },
    { time: "11:00 AM", event: "Hacking Begins", description: "Start building your projects" },
    { time: "12:00 PM", event: "Lunch", description: "Food and refreshments provided" },
    { time: "2:00 PM", event: "Workshop: AI Development", description: "Learn about the latest AI tools and techniques" },
    { time: "4:00 PM", event: "Workshop: UI/UX Design", description: "Principles of effective user interface design" },
    { time: "6:00 PM", event: "Dinner", description: "Evening meal and networking" },
    { time: "8:00 PM", event: "Mentor Sessions", description: "Get advice from industry professionals" },
    { time: "11:00 PM", event: "Late Night Snacks", description: "Fuel up for the night ahead" },
  ];

  const secondDaySchedule = [
    { time: "8:00 AM", event: "Breakfast", description: "Start the second day with energy" },
    { time: "10:00 AM", event: "Hacking Ends", description: "Finalize your projects and prepare presentations" },
    { time: "11:00 AM", event: "Project Presentations", description: "Showcase your work to judges and peers" },
    { time: "1:00 PM", event: "Judging", description: "Projects are evaluated by our panel of experts" },
    { time: "2:30 PM", event: "Closing Ceremony", description: "Awards announcement and final remarks" },
  ];

  // Determine which schedule to display based on selected date
  const scheduleItems = selectedDate.getDate() === hackathonStartDate.getDate()
    ? firstDaySchedule
    : secondDaySchedule;

  return (
    <section id="schedule" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Event Schedule
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Join us for 24 hours of coding, learning, and innovation. Here's what you can
            expect at RamHacks 2025.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Day switching buttons */}
          <div className="flex justify-center mb-8 gap-4">
            <Button
              variant={selectedDate.getDate() === hackathonStartDate.getDate() ? "default" : "outline"}
              className={`rounded-full px-8 py-4 text-lg transition-all ${
                selectedDate.getDate() === hackathonStartDate.getDate()
                  ? "bg-primary text-white shadow-lg hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
              onClick={() => setSelectedDate(hackathonStartDate)}
            >
              Day 1 (April 26)
            </Button>
            <Button
              variant={selectedDate.getDate() === hackathonEndDate.getDate() ? "default" : "outline"}
              className={`rounded-full px-8 py-4 text-lg transition-all ${
                selectedDate.getDate() === hackathonEndDate.getDate()
                  ? "bg-primary text-white shadow-lg hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
              onClick={() => setSelectedDate(hackathonEndDate)}
            >
              Day 2 (April 27)
            </Button>
          </div>

          {/* Timetable schedule display */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Table>
              <TableHeader className="bg-primary/10 dark:bg-gray-700">
                <TableRow>
                  <TableHead className="w-1/6 text-primary dark:text-primary-foreground font-semibold">Time</TableHead>
                  <TableHead className="w-1/3 text-primary dark:text-primary-foreground font-semibold">Event</TableHead>
                  <TableHead className="text-primary dark:text-primary-foreground font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleItems.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <TableCell className="font-medium text-primary dark:text-primary-foreground">
                      {item.time}
                    </TableCell>
                    <TableCell className="font-semibold text-gray-800 dark:text-gray-100">
                      {item.event}
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Schedule subject to minor adjustments. All attendees will be notified of any changes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Schedule.displayName = "Schedule";
export default Schedule;
