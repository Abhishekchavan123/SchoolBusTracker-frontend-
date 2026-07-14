import {
  FaHome,
  FaSchool,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    icon: <FaHome />,
    name: "Dashboard",
    path: "/superdashboard",
  },
  {
    icon: <FaSchool />,
    name: "Add School",
    path: "/superdashboard/schools",
  },
  {
    icon: <FaSchool />,
    name: "List of Schools",
    path: "/superdashboard/schools/list",
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">

          <h2 className="text-2xl font-bold">
            BusTracker
          </h2>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl"
          >
            <FaTimes />
          </button>

        </div>

        <div className="mt-6">

          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-4 px-6 py-4 transition

              ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-slate-700"
              }`}
            >
              {item.icon}

              <span>{item.name}</span>
            </Link>
          ))}

        </div>

        <div className="absolute bottom-0 w-full border-t border-slate-700">

          <Link
            to="/"
            className="flex items-center gap-4 px-6 py-4 hover:bg-red-600"
          >
            <FaSignOutAlt />

            Logout
          </Link>

        </div>

      </div>
    </>
  );
}