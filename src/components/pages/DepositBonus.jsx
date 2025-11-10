import React from "react";

const DepositBonus = () => {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">
          Deposit Bonus
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Earn extra credit with every deposit you make and increase your
          trading power. Enjoy higher margins, extended trading capacity, and
          more opportunities.
        </p>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold text-[#0040FF] mb-3">
            How it works
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Deposit a minimum of $100 to qualify.</li>
            <li>Get a 30% bonus added instantly to your account.</li>
            <li>Use the bonus for margin trading on any instrument.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DepositBonus;
