import React from "react";

const WelcomeBonus = () => {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">
          Welcome Bonus
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Start your trading journey with a free welcome bonus. No deposit
          required!
        </p>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold text-[#0040FF] mb-3">
            Offer Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Receive a $50 welcome credit instantly.</li>
            <li>Trade on any instrument without deposit.</li>
            <li>Withdraw profits once trading volume is achieved.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBonus;
