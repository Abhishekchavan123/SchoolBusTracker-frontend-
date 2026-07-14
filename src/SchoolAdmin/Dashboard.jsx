import {
  FaUserGraduate,
  FaBus,
  FaIdCard,
  FaRoute,
  FaArrowUp,
  FaBell,
} from "react-icons/fa";

const cards = [
  {
    title: "Total Students",
    value: "1,248",
    subtitle: "+18 New Admissions",
    icon: <FaUserGraduate className="text-4xl text-blue-600" />,
    bg: "bg-blue-50",
    badge: "Growing",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "Total Drivers",
    value: "32",
    subtitle: "30 Active Drivers",
    icon: <FaIdCard className="text-4xl text-green-600" />,
    bg: "bg-green-50",
    badge: "Active",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "School Buses",
    value: "28",
    subtitle: "2 Under Maintenance",
    icon: <FaBus className="text-4xl text-orange-500" />,
    bg: "bg-orange-50",
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Today's Trips",
    value: "96",
    subtitle: "12 Currently Running",
    icon: <FaRoute className="text-4xl text-purple-600" />,
    bg: "bg-purple-50",
    badge: "Live",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

const recentStudents = [
  {
    name: "Rahul Kumar",
    class: "10th",
    driver: "Mahesh",
  },
  {
    name: "Sneha Patil",
    class: "8th",
    driver: "Ravi",
  },
  {
    name: "Arjun Reddy",
    class: "7th",
    driver: "Suresh",
  },
];

const recentBuses = [
  {
    bus: "KA32AB1234",
    status: "Running",
  },
  {
    bus: "KA32CD5678",
    status: "Reached School",
  },
  {
    bus: "KA32EF9012",
    status: "Maintenance",
  },
];

const activities = [
  "Rahul Kumar was added successfully.",
  "Bus KA32AB1234 started its morning trip.",
  "Driver Ravi updated his contact details.",
  "GPS Device GPS-001 connected successfully.",
];

export default function Dashboard() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="space-y-8">

      {/* Hero Banner */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">

        <div className="flex justify-between items-center flex-wrap gap-6">

          <div>

            <h1 className="text-4xl font-bold">
              {greeting}, Admin 👋
            </h1>

            <p className="mt-3 text-blue-100 text-lg">
              Welcome back! Here's an overview of today's school transportation system.
            </p>

          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 text-center">

            <FaBell className="text-3xl mx-auto mb-2" />

            <h2 className="text-xl font-bold">
              4 Notifications
            </h2>

            <p className="text-sm text-blue-100">
              Check recent updates
            </p>

          </div>

        </div>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className={`${card.bg} rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 cursor-pointer`}
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 font-medium">
                  {card.title}
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {card.value}
                </h2>

                <p className="text-gray-500 mt-3">
                  {card.subtitle}
                </p>

                <div className="mt-5">

                  <span
                    className={`${card.badgeColor} inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    <FaArrowUp />
                    {card.badge}
                  </span>

                </div>

              </div>

              <div className="bg-white rounded-2xl p-4 shadow-md">
                {card.icon}
              </div>

            </div>

          </div>

        ))}

      </div>
            {/* Today's Overview */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-blue-600">

          <p className="text-gray-500 text-sm">
            Students Present
          </p>

          <h2 className="text-4xl font-bold mt-2">
            1,198
          </h2>

          <p className="text-green-600 mt-2 font-medium">
            96% Attendance
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-green-600">

          <p className="text-gray-500 text-sm">
            Drivers On Duty
          </p>

          <h2 className="text-4xl font-bold mt-2">
            30
          </h2>

          <p className="text-green-600 mt-2 font-medium">
            All Routes Covered
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-orange-500">

          <p className="text-gray-500 text-sm">
            Running Buses
          </p>

          <h2 className="text-4xl font-bold mt-2">
            26
          </h2>

          <p className="text-orange-600 mt-2 font-medium">
            2 Under Maintenance
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-purple-600">

          <p className="text-gray-500 text-sm">
            Routes Completed
          </p>

          <h2 className="text-4xl font-bold mt-2">
            62%
          </h2>

          <p className="text-purple-600 mt-2 font-medium">
            Morning Trips
          </p>

        </div>

      </div>

      {/* Recent Students & Bus Status */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Students */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Recent Students
            </h2>

            <p className="text-gray-500 mt-1">
              Recently added students
            </p>

          </div>

          <div>

            {recentStudents.map((student) => (

              <div
                key={student.name}
                className="flex justify-between items-center p-5 border-b last:border-none hover:bg-blue-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">

                    {student.name.charAt(0)}

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {student.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Class {student.class}
                    </p>

                  </div>

                </div>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

                  {student.driver}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Bus Status */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Live Bus Status
            </h2>

            <p className="text-gray-500 mt-1">
              Current fleet activity
            </p>

          </div>

          <div>

            {recentBuses.map((bus) => (

              <div
                key={bus.bus}
                className="flex justify-between items-center p-5 border-b last:border-none hover:bg-gray-50 transition"
              >

                <div>

                  <h3 className="font-semibold">
                    {bus.bus}
                  </h3>

                  <p className="text-sm text-gray-500">
                    GPS Connected
                  </p>

                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    bus.status === "Running"
                      ? "bg-green-100 text-green-700"
                      : bus.status === "Reached School"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {bus.status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
            {/* Recent Activities & Quick Actions */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Activities */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Recent Activities
            </h2>

            <p className="text-gray-500 mt-1">
              Latest updates from your transport system
            </p>

          </div>

          <div className="p-6">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex items-start gap-4 py-4 border-b last:border-none"
              >

                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>

                <div>

                  <p className="text-gray-700 font-medium">
                    {activity}
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    Just now
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Quick Actions
            </h2>

            <p className="text-gray-500 mt-1">
              Frequently used shortcuts
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 p-6">

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 transition duration-300 shadow-lg hover:shadow-xl">
              <div className="text-3xl mb-3">👨‍🎓</div>
              <p className="font-semibold">
                Add Student
              </p>
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-6 transition duration-300 shadow-lg hover:shadow-xl">
              <div className="text-3xl mb-3">👨‍✈️</div>
              <p className="font-semibold">
                Add Driver
              </p>
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-6 transition duration-300 shadow-lg hover:shadow-xl">
              <div className="text-3xl mb-3">🚌</div>
              <p className="font-semibold">
                Add Bus
              </p>
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl p-6 transition duration-300 shadow-lg hover:shadow-xl">
              <div className="text-3xl mb-3">📍</div>
              <p className="font-semibold">
                Live Tracking
              </p>
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>

            <h2 className="text-2xl font-bold">
              School Transport Management System
            </h2>

            <p className="text-blue-100 mt-2">
              Manage students, drivers, buses and live tracking from one place.
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-4xl font-bold">
              99.9%
            </h3>

            <p className="text-blue-100">
              System Uptime
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}