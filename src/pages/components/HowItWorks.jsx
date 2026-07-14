// src/components/HowItWorks.jsx

export default function HowItWorks() {
  const steps = [
    {
      img: "https://img.icons8.com/color/96/meal.png",
      title: "1. Donate Food",
      desc: "Individuals, restaurants or events register surplus food to share.",
    },
    {
      img: "https://img.icons8.com/color/96/delivery.png",
      title: "2. Volunteers Pick Up",
      desc: "Verified NGOs and volunteers collect the food quickly and safely.",
    },
    {
      img: "/assets/Distributed.jpg", // Put your image inside public/assets
      title: "3. Distribute to Needy",
      desc: "Meals are distributed to families and communities in need.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gray-900 text-center px-6"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >
            <img
              src={step.img}
              className="mx-auto mb-5 w-24 h-24"
              alt=""
            />

            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              {step.title}
            </h3>

            <p className="text-gray-300">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}