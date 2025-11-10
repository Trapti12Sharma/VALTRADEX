import React from "react";

const OurAwards = () => {
  const awards = [
    "Best Global Broker 2023 – Global Finance Awards",
    "Top CFD Provider 2022 – Forex Expo",
    "Fastest Growing Broker 2021 – Finance Derivative",
  ];

  return (
    <section className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">Our Awards</h1>
        <p className="text-gray-700 text-lg mb-6">
          Our dedication to excellence has earned us recognition from the most
          prestigious financial organizations worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-[#0040FF]">{award}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAwards;
