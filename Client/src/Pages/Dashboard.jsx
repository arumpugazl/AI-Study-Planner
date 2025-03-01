import React, { useState } from "react";
import {
  Calendar,
  Clock,
  BookOpen,
  BarChart2,
  CheckSquare,
  Book,
  Coffee,
  Play,
  User,
  BellRing,
  Settings,
  Moon,
  Sun,
  FileText,
  Star,
  Zap,
} from "lucide-react";

import Topnav from "./Components/Topnav";

const Dashboard = () => {
  const user = {
    name: "Alex Johnson",
    subjects: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "English Literature",
    ],
    dailyGoal: 4, 
    completedToday: 2.5, 
    streak: 7, 
    level: 12,
    xp: 2450,
  };

  const progressData = [
    { name: "Mon", hours: 1.5 },
    { name: "Tue", hours: 4.2 },
    { name: "Wed", hours: 2.8 },
    { name: "Thu", hours: 3.0 },
    { name: "Fri", hours: 2.5 },
    { name: "Sat", hours: 1.5 },
    { name: "Sun", hours: 0.8 },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "Complete Physics Assignment",
      deadline: "Today, 8:00 PM",
      subject: "Physics",
      priority: "High",
    },
    {
      id: 2,
      title: "Study Calculus Chapter 5",
      deadline: "Tomorrow, 12:00 PM",
      subject: "Mathematics",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Revise English Essay",
      deadline: "Feb 29, 5:00 PM",
      subject: "English Literature",
      priority: "Low",
    },
    {
      id: 4,
      title: "Algorithm Practice",
      deadline: "Mar 2, 11:00 AM",
      subject: "Computer Science",
      priority: "Medium",
    },
  ];

  const recommendedSessions = [
    {
      id: 1,
      title: "Physics Problem Solving",
      duration: 45,
      difficulty: "Medium",
    },
    {
      id: 2,
      title: "Calculus Concepts Review",
      duration: 30,
      difficulty: "Hard",
    },
    {
      id: 3,
      title: "Literature Analysis Practice",
      duration: 25,
      difficulty: "Easy",
    },
  ];

  // Sample AI-generated summaries
  const summaries = [
    {
      id: 1,
      title: "Quantum Mechanics Fundamentals",
      subject: "Physics",
      length: "3 pages",
    },
    {
      id: 2,
      title: "Shakespearean Tragedy Analysis",
      subject: "English Literature",
      length: "2 pages",
    },
    {
      id: 3,
      title: "Data Structures Overview",
      subject: "Computer Science",
      length: "4 pages",
    },
  ];

  // Sample notifications
  const notifications = [
    {
      id: 1,
      title: "Assignment Due Soon",
      message: "Physics assignment due in 3 hours",
      time: "3 hours ago",
    },
    {
      id: 2,
      title: "Study Goal Achieved",
      message: "Congratulations! You reached your goal yesterday",
      time: "12 hours ago",
    },
    {
      id: 3,
      title: "New AI Summary Ready",
      message: "Your requested summary on Calculus is ready",
      time: "1 day ago",
    },
  ];

  // Sample focus timer presets
  const focusPresets = [
    { id: 1, name: "Deep Work", duration: 50, breakTime: 10 },
    { id: 2, name: "Pomodoro", duration: 25, breakTime: 5 },
    { id: 3, name: "Quick Session", duration: 15, breakTime: 3 },
  ];

  return (
    <div className="mx-auto p-10">
      {/* Top Row - Progress Tracking */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          Progress Tracking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Profile Stats
              </h3>
              <Zap className="text-indigo-400" size={20} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-indigo-900 rounded-full p-2 mr-3">
                    <Star className="text-indigo-400" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Study Streak</p>
                    <p className="text-xl font-bold text-white">
                      {user.streak} days
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-indigo-900 rounded-full p-2 mr-3">
                    <BookOpen className="text-indigo-400" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Study Level</p>
                    <p className="text-xl font-bold text-white">
                      Level {user.level}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg col-span-2">
                <p className="text-xs text-gray-400 mb-1">XP Progress</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <div
                    className="bg-indigo-500 h-2.5 rounded-full"
                    style={{ width: "65%" }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1 text-right">
                  {user.xp} / 3500 XP
                </p>
              </div>
            </div>
          </div>

          {/* Daily Progress Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Today's Progress
              </h3>
              <Clock className="text-indigo-400" size={20} />
            </div>
            <div className="flex items-center justify-center h-40">
              <div className="relative h-36 w-36 flex items-center justify-center">
                <svg className="transform -rotate-90 h-36 w-36">
                  <circle
                    cx="68"
                    cy="68"
                    r="60"
                    fill="transparent"
                    stroke="#4B5563"
                    strokeWidth="12"
                  />
                  <circle
                    cx="68"
                    cy="68"
                    r="60"
                    fill="transparent"
                    stroke="#6366f1"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 60}
                    strokeDashoffset={
                      2 *
                      Math.PI *
                      60 *
                      (1 - user.completedToday / user.dailyGoal)
                    }
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-bold text-gray-100">
                    {user.completedToday}h
                  </div>
                  <div className="text-sm text-gray-400">
                    of {user.dailyGoal}h goal
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-sm flex items-center justify-center mx-auto">
                <Play size={16} className="mr-1" />
                Start Study Session
              </button>
            </div>
          </div>

          {/* Weekly Analytics Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Weekly Progress
              </h3>
              <BarChart2 className="text-indigo-400" size={20} />
            </div>
            <div className="h-40 flex items-end justify-between px-2">
              {progressData.map((day) => (
                <div key={day.name} className="flex flex-col items-center">
                  <div className="text-xs text-gray-400 mb-1">{day.hours}h</div>
                  <div
                    className="w-8 bg-indigo-500 rounded-t-md relative group"
                    style={{ height: `${(day.hours / 5) * 100}px` }}>
                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap transition-opacity">
                      {day.hours} hours on {day.name}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{day.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-400">
                Total: 18.3 hours this week
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row - Tasks & Focus */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          Productivity Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Tasks Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Upcoming Tasks
              </h3>
              <CheckSquare className="text-indigo-400" size={20} />
            </div>
            <div className="space-y-3 mt-2">
              {upcomingTasks.slice(0, 3).map((task) => (
                <div
                  key={task.id}
                  className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                  <div
                    className={`w-2 h-10 rounded-full mr-3 ${
                      task.priority === "High"
                        ? "bg-red-500"
                        : task.priority === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-200">
                      {task.title}
                    </h4>
                    <p className="text-xs text-gray-400">{task.deadline}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                    {task.subject}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">
                View All Tasks
              </button>
            </div>
          </div>

          {/* Focus Timer Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Focus Timer
              </h3>
              <Coffee className="text-indigo-400" size={20} />
            </div>
            <div className="text-center py-2">
              <div className="text-4xl font-bold text-gray-100 mb-4">25:00</div>
              <div className="flex justify-center space-x-3 mb-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-2 text-sm">
                  Start
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-6 py-2 text-sm">
                  Reset
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {focusPresets.map((preset) => (
                <div
                  key={preset.id}
                  className="bg-gray-700 p-2 rounded-lg text-center cursor-pointer hover:bg-gray-600">
                  <p className="text-xs text-white">{preset.name}</p>
                  <p className="text-xs text-gray-400">{preset.duration} min</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Learning Resources */}
      <div>
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          Learning Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personalized Study Plan Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Recommended Study Sessions
              </h3>
              <BookOpen className="text-indigo-400" size={20} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {recommendedSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium text-gray-200">
                      {session.title}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-900 text-indigo-300">
                      {session.duration} min
                    </span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        session.difficulty === "Hard"
                          ? "bg-red-900 text-red-300"
                          : session.difficulty === "Medium"
                          ? "bg-yellow-900 text-yellow-300"
                          : "bg-green-900 text-green-300"
                      }`}>
                      {session.difficulty}
                    </div>
                    <button className="ml-auto text-indigo-400 text-xs font-medium hover:text-indigo-300">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Summaries Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                AI-Generated Summaries
              </h3>
              <Book className="text-indigo-400" size={20} />
            </div>
            <div className="space-y-3 mt-2">
              {summaries.map((summary) => (
                <div
                  key={summary.id}
                  className="p-3 border border-gray-700 hover:border-indigo-700 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer">
                  <h4 className="text-sm font-medium text-gray-200">
                    {summary.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-400">
                      {summary.subject}
                    </span>
                    <span className="text-xs text-gray-400">
                      {summary.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg px-4 py-2 text-sm w-full">
                Generate New Summary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
