import {
  FaSchool,
  FaBus,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

const cards = [
  {
    title: "Total Schools",
    value: "52",
    subtitle: "+3 New Schools",
    icon: <FaSchool className="text-3xl text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    title: "School Admins",
    value: "52",
    subtitle: "All Active",
    icon: <FaUserTie className="text-3xl text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "School Buses",
    value: "120",
    subtitle: "4 In Maintenance",
    icon: <FaBus className="text-3xl text-orange-500" />,
    bg: "bg-orange-50",
  },
  {
    title: "Total Students",
    value: "6400",
    subtitle: "+124 Admissions",
    icon: <FaUserGraduate className="text-3xl text-purple-600" />,
    bg: "bg-purple-50",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero Section */}

      <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white p-8 shadow-lg">

        <div className="flex flex-col lg:flex-row justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold">
              {getGreeting()}, Super Admin 👋
            </h1>

            <p className="mt-3 text-blue-100 text-lg max-w-2xl">
              Manage all schools, administrators, buses and transportation
              services from one centralized dashboard.
            </p>

          </div>

          <div className="mt-6 lg:mt-0">

            <div className="bg-white/20 backdrop-blur-md px-8 py-5 rounded-2xl text-center border border-white/20">

              <FaSchool className="text-5xl mx-auto mb-3" />

              <h2 className="text-4xl font-bold">52</h2>

              <p className="text-blue-100">
                Active Schools
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className={`${card.bg} rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6`}
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {card.value}
                </h2>

                <p className="text-sm text-gray-500 mt-3">
                  {card.subtitle}
                </p>

              </div>

              {card.icon}

            </div>

          </div>

        ))}

      </div>

      {/* PART 2 starts below */}

    </div>
  );
}
{/* Dashboard Content */}

<div className="grid lg:grid-cols-2 gap-6">

  {/* Recent Schools */}

  <div className="bg-white rounded-2xl shadow">

    <div className="p-5 border-b flex justify-between items-center">

      <h2 className="text-xl font-semibold">
        Recent Schools
      </h2>

      <button className="text-blue-600 font-medium hover:underline">
        View All
      </button>

    </div>

    <div>

      {[
        {
          school: "Green Valley Public School",
          principal: "Mr. Ramesh Kumar",
          status: "Active",
        },
        {
          school: "Delhi Public School",
          principal: "Mrs. Anitha Sharma",
          status: "Active",
        },
        {
          school: "Oxford International School",
          principal: "Mrs. Priya Nair",
          status: "Pending",
        },
        {
          school: "National High School",
          principal: "Mr. Suresh Babu",
          status: "Active",
        },
      ].map((item) => (

        <div
          key={item.school}
          className="flex justify-between items-center p-5 border-b last:border-none hover:bg-gray-50 transition"
        >

          <div>

            <h3 className="font-semibold">
              {item.school}
            </h3>

            <p className="text-sm text-gray-500">
              {item.principal}
            </p>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              item.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {item.status}
          </span>

        </div>

      ))}

    </div>

  </div>

  {/* Today's Overview */}

  <div className="bg-white rounded-2xl shadow">

    <div className="p-5 border-b">

      <h2 className="text-xl font-semibold">
        Today's Overview
      </h2>

    </div>

    <div className="p-6 space-y-5">

      <div className="flex justify-between">

        <span className="text-gray-600">
          New Schools Registered
        </span>

        <span className="font-bold text-blue-600">
          3
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-gray-600">
          New School Admins
        </span>

        <span className="font-bold text-green-600">
          5
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-gray-600">
          Active Users
        </span>

        <span className="font-bold text-purple-600">
          126
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-gray-600">
          Total Trips Today
        </span>

        <span className="font-bold text-orange-500">
          94
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-gray-600">
          Pending Requests
        </span>

        <span className="font-bold text-red-500">
          2
        </span>

      </div>

    </div>

  </div>

</div>

{/* System Status */}

<div className="bg-white rounded-2xl shadow mt-6">

  <div className="p-5 border-b">

    <h2 className="text-xl font-semibold">
      System Status
    </h2>

  </div>

  <div className="grid md:grid-cols-4 gap-6 p-6">

    <div className="flex justify-between items-center">

      <span>API Server</span>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Online
      </span>

    </div>

    <div className="flex justify-between items-center">

      <span>Database</span>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Connected
      </span>

    </div>

    <div className="flex justify-between items-center">

      <span>GPS Network</span>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Running
      </span>

    </div>

    <div className="flex justify-between items-center">

      <span>Notifications</span>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Active
      </span>

    </div>

  </div>

</div>
      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        {/* Recent Activities */}

        <div className="bg-white rounded-2xl shadow">

          <div className="p-5 border-b">

            <h2 className="text-xl font-semibold">
              Recent Activities
            </h2>

          </div>

          <div>

            {[
              {
                title: "Green Valley School Added",
                time: "10 Minutes Ago",
                color: "bg-blue-500",
              },
              {
                title: "New School Admin Created",
                time: "35 Minutes Ago",
                color: "bg-green-500",
              },
              {
                title: "Delhi Public School Updated",
                time: "1 Hour Ago",
                color: "bg-purple-500",
              },
              {
                title: "GPS Device Activated",
                time: "2 Hours Ago",
                color: "bg-orange-500",
              },
              {
                title: "Subscription Renewed",
                time: "Today",
                color: "bg-pink-500",
              },
            ].map((activity) => (

              <div
                key={activity.title}
                className="flex items-center gap-4 p-5 border-b last:border-none hover:bg-gray-50 transition"
              >

                <div
                  className={`w-3 h-3 rounded-full ${activity.color}`}
                />

                <div className="flex-1">

                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {activity.time}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow">

          <div className="p-5 border-b">

            <h2 className="text-xl font-semibold">
              Quick Actions
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-5 p-6">

            <button className="rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white p-5 font-semibold shadow-md">
              ➕ Add School
            </button>

            <button className="rounded-xl bg-green-600 hover:bg-green-700 transition text-white p-5 font-semibold shadow-md">
              👤 Add Admin
            </button>

            <button className="rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white p-5 font-semibold shadow-md">
              📋 School List
            </button>

            <button className="rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white p-5 font-semibold shadow-md">
              📊 Reports
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-2xl text-white shadow-lg">

        <div className="flex flex-col lg:flex-row justify-between items-center p-6">

          <div>

            <h2 className="text-2xl font-bold">
              SchoolBusTracker SaaS
            </h2>

            <p className="text-blue-100 mt-2">
              Centralized School Transport Management Platform
            </p>

          </div>

          <div className="mt-4 lg:mt-0 flex gap-10">

            <div className="text-center">

              <h2 className="text-3xl font-bold">
                99.9%
              </h2>

              <p className="text-blue-100 text-sm">
                System Uptime
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-3xl font-bold">
                24/7
              </h2>

              <p className="text-blue-100 text-sm">
                Monitoring
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-3xl font-bold">
                52
              </h2>

              <p className="text-blue-100 text-sm">
                Active Schools
              </p>

            </div>

          </div>

        </div>

      </div>