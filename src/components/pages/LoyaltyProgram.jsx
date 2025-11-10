import React from "react";

const LoyaltyProgram = () => {
  return (
    <section className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">
          Loyalty Program
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Get rewarded for your trading activity. Earn points on every trade and
          redeem them for bonuses, gadgets, or cashback.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {["Bronze", "Silver", "Gold"].map((tier) => (
            <div
              key={tier}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0040FF] mb-2">
                {tier} Tier
              </h3>
              <p className="text-gray-600">
                {tier === "Gold"
                  ? "Exclusive benefits, faster withdrawals, and special bonuses."
                  : `Earn ${tier} level rewards as you trade more.`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
