import { useState } from "react";
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

const Sidenav = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-900 flex flex-col items-center py-8 text-white">
      <div className="mb-10">
        <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center">
          <BookOpen className="text-white" size={20} />
        </div>
      </div>

      <nav className="flex flex-col items-center space-y-8 flex-1">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`p-3 rounded-xl ${
            activeTab === "dashboard" ? "bg-indigo-600" : "hover:bg-gray-800"
          }`}
          title="Dashboard">
          <BarChart2 size={20} />
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`p-3 rounded-xl ${
            activeTab === "calendar" ? "bg-indigo-600" : "hover:bg-gray-800"
          }`}
          title="Calendar">
          <Calendar size={20} />
        </button>
        <button
          onClick={() => setActiveTab("tasks")}
          className={`p-3 rounded-xl ${
            activeTab === "tasks" ? "bg-indigo-600" : "hover:bg-gray-800"
          }`}
          title="Tasks">
          <CheckSquare size={20} />
        </button>
        <button
          onClick={() => setActiveTab("summaries")}
          className={`p-3 rounded-xl ${
            activeTab === "summaries" ? "bg-indigo-600" : "hover:bg-gray-800"
          }`}
          title="Summaries">
          <FileText size={20} />
        </button>
        <button
          onClick={() => setActiveTab("focus")}
          className={`p-3 rounded-xl ${
            activeTab === "focus" ? "bg-indigo-600" : "hover:bg-gray-800"
          }`}
          title="Focus Mode">
          <Coffee size={20} />
        </button>
      </nav>

      <div className="flex item-center flex-col mt-auto space-y-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-xl hover:bg-gray-800"
          title={darkMode ? "Light Mode" : "Dark Mode"}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="p-3 rounded-xl hover:bg-gray-800" title="Settings">
          <Settings size={20} />
        </button>
        <button className="p-3 rounded-xl hover:bg-gray-800" title="Profile">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};
export default Sidenav;
