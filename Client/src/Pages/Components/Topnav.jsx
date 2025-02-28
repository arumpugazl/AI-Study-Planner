import { BellRing, User } from "lucide-react";

const Topnav = () => {
  const user = {
    name: "Naveen Sakthi",
    subjects: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "English Literature",
    ],
    dailyGoal: 4, // hours
    completedToday: 2.5, // hours
    streak: 7, // days
    level: 12,
    xp: 2450,
  };

  return (
    <>
      <div className="p-10 mt-3">
        {/* Header */}
        <div className="flex justify-between items-center mt-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">
              Hello, {user.name}!
            </h1>
            <p className="text-gray-400">Let's reach your study goals today</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <BellRing className="text-gray-300" size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-indigo-700">
              Focus Mode
            </div>
            <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center">
              <User className="text-gray-300" size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topnav;
