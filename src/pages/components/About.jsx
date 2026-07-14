// src/components/About.jsx

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-20"
            style={{
                backgroundImage:
                    "url(https://cdn.phototourl.com/free/2026-07-09-c64a6db9-a328-4a26-b433-881755b58b96.jpg",
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                    About Us
                </h2>

                <p className="text-lg md:text-xl leading-8 text-gray-200">
                    SchoolBusTracker is an innovative platform designed to bridge the gap between schools, parents, and school buses by providing real-time location tracking, instant notifications, and enhanced student safety throughout every journey.
                    <br /><br />

                    <span className="text-yellow-400 font-semibold">
                        Ensure student safety and peace of mind.
                    </span>

                    <br /><br />

                    Using smart GPS technology, we connect schools, parents, drivers, and administrators through real-time bus tracking, instant notifications, and route monitoring to ensure every student travels safely and arrives on time.

                    <br /><br />

                    Together, we can build a future where every student travels safely and every parent stays informed.
                </p>
            </div>
        </section>
    );
}