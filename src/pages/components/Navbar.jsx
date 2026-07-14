// src/components/Navbar.jsx

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      try {
        const raw = localStorage.getItem("de_authUser");

        if (raw) {
          const u = JSON.parse(raw);

          setUser({
            name: u.fullName || u.email || "User",
          });
        } else {
          setUser({
            name: "User",
          });
        }
      } catch {
        setUser({
          name: "User",
        });
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener(
        "click",
        handleClickOutside
      );
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("de_authUser");

    setUser(null);

    navigate("/login");
  };

  return (
    <nav  className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-transparent">

      {/* Logo */}

      <div className="flex items-center space-x-2">

        <img
          src="https://qsyyshbhsoqfaxoqdqwp.supabase.co/storage/v1/object/sign/assets/logo1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NmNiMWMxMC1iZmFiLTQ0NzgtOWY4My00NmIyMDgxZWIyZmMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvbG9nbzEuanBnIiwiaWF0IjoxNzU5Mjg3MTQwLCJleHAiOjE3OTA4MjMxNDB9.gS6qMW_rieUwiP0yFWKsFhr8J9tyYk5pkoydRr5_d6I"
          className="w-10 h-10 animate-bounce"
          alt=""
        />

        <h1 className="text-3xl font-bold text-yellow-400 drop-shadow-lg">
          SchoolBusTracker
        </h1>

      </div>

      {/* Links */}

      <div className="flex items-center space-x-8 text-lg">

        <a
          href="#"
          className="hover:text-yellow-400 transition"
        >
          Home
        </a>

        {/* <Link
          to="/join-ngo"
          className="hover:text-yellow-400 transition"
        >
          Join as NGO
        </Link> */}

        <a
          href="#about"
          className="hover:text-yellow-400 transition"
        >
          About Us
        </a>

        <a
          href="#contact"
          className="hover:text-yellow-400 transition"
        >
          Contact Us
        </a>

        {!user ? (
          <Link
            to="/login"
            className="hover:text-yellow-400 transition"
          >
            Login / Register
          </Link>
        ) : (
          <div
            ref={profileRef}
            className="relative"
          >
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-sm"
            >
              <span className="inline-grid place-items-center w-7 h-7 rounded-full bg-yellow-400 text-black font-bold">
                {user.name.charAt(0).toUpperCase()}
              </span>

              <span className="hidden md:block">
                {user.name}
              </span>

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-xl text-gray-700 overflow-hidden">

                <Link
                  to="/volunteer"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <Link
                  to="/auth/profile"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Edit Profile
                </Link>

                <div className="border-t" />

                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}