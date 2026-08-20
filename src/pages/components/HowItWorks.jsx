// src/components/HowItWorks.jsx

export default function HowItWorks() {
  const steps = [
    {
      img: "https://img.icons8.com/color/96/login-rounded-right.png",
      title: "1. Login to the System",
      desc: "School administrators securely log in to access the School Bus Tracker dashboard and manage transportation services.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/04/34/12/27/360_F_434122786_W4lQVLQBYWBtUBGRwwo0jrfx31uYiFA4.jpg",
      title: "2. Manage School Transportation",
      desc: "Add buses, register drivers, enroll students, assign routes, and organize school transportation efficiently.",
    },
    {
      img: "https://img.icons8.com/color/96/gps-device.png",
      title: "3. Monitor Live Bus Tracking",
      desc: "Track buses in real time, monitor routes, receive notifications, and ensure the safety of every student throughout the journey.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
      <h2 className="mb-10 text-3xl font-bold text-yellow-400 sm:mb-12">
        How It Works
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105"
          >
            <img src={step.img} className="mx-auto mb-5 h-24 w-24" alt="" />

            <h3 className="mb-3 text-xl font-semibold text-yellow-300">
              {step.title}
            </h3>

            <p className="text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}