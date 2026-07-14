// src/pages/Login.jsx

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";



const slides = [
    "https://cdn.phototourl.com/free/2026-07-09-62031c6a-0759-4620-891d-33cb2ce22f5d.jpg",

    "https://cdn.phototourl.com/free/2026-07-09-48440a33-c7af-4ff4-b0d2-54fc6e2400c0.jpg",

    "https://cdn.phototourl.com/free/2026-07-08-37cf1f8d-91c3-4570-927c-4ee35081965b.jpg",
];


export default function Login() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!email.trim() || !password.trim()) {
            setError("Please enter email and password.");
            return;
        }

        try {

            const res = await fetch("http://localhost:4000/api/auth/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({

                    email: email.trim(),

                    password: password.trim(),

                }),

            });

            const data = await res.json();

            if (!res.ok) {

                setError(data.error || "Invalid email or password.");

                return;

            }

            if (data.session?.access_token) {

                localStorage.setItem(
                    "access_token",
                    data.session.access_token
                );

            }

            const meta = data.user?.user_metadata || {};

            const userObj = {

                email: data.user?.email || email,

                fullName:
                    meta.full_name ||
                    meta.name ||
                    email.split("@")[0] ||
                    "User",

                role: meta.role || "user",

            };

            localStorage.setItem(
                "de_authUser",
                JSON.stringify(userObj)
            );

            alert(`Login Successful! Welcome ${userObj.fullName}`);

            navigate("/");

        } catch (err) {

            setError("Network error. Please try again.");

        }
    };

    return (

        <div className="relative min-h-screen overflow-hidden">

            {/* Background Slideshow */}

            {slides.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === index
                        ? "opacity-100"
                        : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                />
            ))}

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60" />

            {/* Navbar */}

            <nav className="relative z-20 flex justify-between items-center px-8 py-5">

                <div className="flex items-center gap-2">

                    <img
                        src="https://qsyyshbhsoqfaxoqdqwp.supabase.co/storage/v1/object/sign/assets/logo1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NmNiMWMxMC1iZmFiLTQ0NzgtOWY4My00NmIyMDgxZWIyZmMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvbG9nbzEuanBnIiwiaWF0IjoxNzU5Mjg3MTQwLCJleHAiOjE3OTA4MjMxNDB9.gS6qMW_rieUwiP0yFWKsFhr8J9tyYk5pkoydRr5_d6I"
                        className="w-10 h-10 animate-bounce"
                        alt=""
                    />

                    <h1 className="text-3xl font-bold text-yellow-400">
                        SchoolBusTracker
                    </h1>

                </div>

                <div className="space-x-8 text-lg text-white">

                    {/* <a href="/">Home</a> */}
                    <Link to="/">Home</Link>

                    {/* <Link to="/join-ngo">Join as NGO</Link>

                    <Link to="/contact">Contact</Link> */}

                </div>

            </nav>

            {/* Login Card */}

            <div className="relative z-20 flex justify-center items-center min-h-[80vh]">

                <div className="bg-white/95 p-8 rounded-xl shadow-2xl w-full max-w-md">

                    <h2 className="text-3xl font-bold text-center text-green-600 mb-8">

                        Login to SchoolBusTracker

                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-5">

                            <label className="block mb-2 font-semibold text-gray-700">

                                Email

                            </label>

                            <input
                                type="email"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                        </div>

                        <div className="mb-5">

                            <label className="block mb-2 font-semibold text-gray-700">

                                Password

                            </label>

                            <input
                                type="password"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                        </div>

                        {error && (
                            <p className="text-red-500 text-sm mb-4">

                                {error}

                            </p>
                        )}

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                            >
                                Login
                            </button>

                            <Link
                                to="/auth/register"
                                className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-center font-semibold"
                            >
                                Register
                            </Link>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}
