"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "~/lib/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/lib/components/ui/table"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export const Schedule: React.FC = () => {
  // Define dates for the hackathon (April 26-27, 2025)
  const hackathonStartDate = new Date(2025, 3, 26)
  const hackathonEndDate = new Date(2025, 3, 27)

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<Date>(hackathonStartDate)

  // Schedule items for each day
  const firstDaySchedule = [
    {
      time: "11:30 AM - 1:00 PM",
      event: "Check-in & Kickoff",
      description: "Check-in opens, team formation, and competition begins",
      category: "main",
    },
    {
      time: "2:00 PM - 3:00 PM",
      event: "Lunch & Q&A",
      description: "Enjoy lunch and participate in a Q&A session",
      category: "food",
    },
    {
      time: "3:00 PM - 4:00 PM",
      event: "Workshop: CyberSecurity",
      description: "Learn about the latest cybersecurity techniques and best practices",
      category: "workshop",
    },
    {
      time: "4:00 PM - 6:00 PM",
      event: "Competition Continues",
      description: "Continue working on your projects",
      category: "main",
    },
    {
      time: "6:00 PM - 7:00 PM",
      event: "Dinner & Workshop",
      description: "Dinner served with Google/SWIC workshop",
      category: "food",
    },
    {
      time: "7:00 PM - 8:00 PM",
      event: "Day 1 Wrap-up",
      description: "Begin wrapping up activities for Day 1",
      category: "logistics",
    },
    {
      time: "8:00 PM - 9:00 PM",
      event: "Progress Submission",
      description: "Submit your progress and attend closing speeches for Day 1",
      category: "logistics",
    },
  ]

  const secondDaySchedule = [
    {
      time: "11:30 AM - 1:00 PM",
      event: "Day 2 Welcome",
      description: "Welcome back, day 2 instructions, and resume competition",
      category: "main",
    },
    {
      time: "2:00 PM - 3:00 PM",
      event: "Lunch & AI Workshop",
      description: "Lunch served with workshop on AI technologies",
      category: "food",
    },
    {
      time: "3:00 PM - 5:00 PM",
      event: "Competition & Warp Workshop",
      description: "Continue competition with Introduction to Warp workshop (4:00-4:30)",
      category: "workshop",
    },
    {
      time: "5:00 PM - 6:00 PM",
      event: "Final Submissions",
      description: "Turn in final version of projects",
      category: "main",
    },
    {
      time: "6:00 PM - 7:00 PM",
      event: "Dinner & Judging",
      description: "Dinner served while judging begins",
      category: "food",
    },
    {
      time: "7:00 PM - 8:00 PM",
      event: "Day 2 Wrap-up",
      description: "Begin wrapping up activities for Day 2",
      category: "logistics",
    },
    {
      time: "8:00 PM - 9:00 PM",
      event: "Awards Ceremony",
      description: "Judging concludes, winners announced, and prizes distributed",
      category: "main",
    },
  ]

  // Determine which schedule to display based on selected date
  const scheduleItems = selectedDate.getDate() === hackathonStartDate.getDate() ? firstDaySchedule : secondDaySchedule

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "main":
        return "border-l-primary"
      case "workshop":
        return "border-l-purple-500"
      case "food":
        return "border-l-orange-500"
      case "logistics":
        return "border-l-blue-500"
      default:
        return "border-l-gray-300"
    }
  }

  // Get category badge
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "main":
        return "bg-primary/10 text-primary"
      case "workshop":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
      case "food":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
      case "logistics":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <section
      id="schedule"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
              <Calendar size={28} />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Event
            <span className="text-primary"> Schedule</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Join us for 29 hours of coding, learning, and innovation. Here's what you can expect at RamHacks 2025.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Day switching buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center mb-10 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant={selectedDate.getDate() === hackathonStartDate.getDate() ? "default" : "outline"}
              className={`rounded-full px-8 py-6 text-lg transition-all ${selectedDate.getDate() === hackathonStartDate.getDate()
                ? "bg-primary text-white shadow-lg hover:bg-primary/90"
                : "border-primary text-primary hover:bg-primary/10"
                }`}
              onClick={() => setSelectedDate(hackathonStartDate)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Day 1 (April 26)
            </Button>
            <Button
              variant={selectedDate.getDate() === hackathonEndDate.getDate() ? "default" : "outline"}
              className={`rounded-full px-8 py-6 text-lg transition-all ${selectedDate.getDate() === hackathonEndDate.getDate()
                ? "bg-primary text-white shadow-lg hover:bg-primary/90"
                : "border-primary text-primary hover:bg-primary/10"
                }`}
              onClick={() => setSelectedDate(hackathonEndDate)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Day 2 (April 27)
            </Button>
          </motion.div>

          {/* Legend */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Main Events</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Workshops</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Food</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Logistics</span>
            </div>
          </motion.div>

          {/* Timetable schedule display */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50 dark:bg-gray-900">
                  <TableRow>
                    <TableHead className="w-1/6 py-4 text-primary dark:text-primary-foreground font-semibold">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        Time
                      </div>
                    </TableHead>
                    <TableHead className="w-1/3 py-4 text-primary dark:text-primary-foreground font-semibold">
                      Event
                    </TableHead>
                    <TableHead className="py-4 text-primary dark:text-primary-foreground font-semibold">
                      Description
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduleItems.map((item, index) => (
                    <TableRow
                      key={`${+index}-${item.time}`}
                      className={`group border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-l-4 ${getCategoryColor(
                        item.category,
                      )}`}
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100 py-5">
                        <div className="flex items-center">
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-mono">
                            {item.time}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-5">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg mb-1">
                            {item.event}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full inline-block w-fit ${getCategoryBadge(item.category)}`}
                          >
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-300 py-5">
                        <p className="leading-relaxed">{item.description}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Schedule subject to minor adjustments. All attendees will be notified of any changes.
            </p>
          </motion.div>

          {/* Timeline visualization */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Join us for an unforgettable weekend of innovation!
            </h3>
            <div className="flex justify-center">
              <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg cursor-pointer" onClick={() => {
                window.open("https://forms.gle/Xp6nnGfTPvzb7hFM9", "_blank", "noreferrer");
              }}>
                Register Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

Schedule.displayName = "Schedule"
export default Schedule
