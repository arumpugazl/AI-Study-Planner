
import { useState } from "react";
const Notification = () => {

    const [showNotifications,setShowNotifications] = useState(false)
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


  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-gray-800 p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
        showNotifications ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-100">Notifications</h3>
        <button
          onClick={() => setShowNotifications(false)}
          className="text-gray-400 hover:text-white">
          &times;
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-3 bg-gray-700 rounded-lg">
            <h4 className="text-sm font-medium text-gray-200">
              {notification.title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-2 text-right">
              {notification.time}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-indigo-400 text-sm hover:text-indigo-300">
          Mark All as Read
        </button>
      </div>
    </div>
  );
};

export default Notification;
