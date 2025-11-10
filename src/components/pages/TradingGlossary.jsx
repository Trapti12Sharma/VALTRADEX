import React from "react";

const TradingGlossary = () => {
  const terms = [
    {
      term: "Leverage",
      def: "A loan provided by the broker to control larger positions.",
    },
    {
      term: "Spread",
      def: "The difference between the bid and ask price of an asset.",
    },
    {
      term: "Margin",
      def: "The amount of capital required to open a position.",
    },
  ];

  return (
    <section className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">
          Trading Glossary
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          A collection of essential terms every trader should know.
        </p>

        <div className="space-y-4">
          {terms.map((item, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-[#0040FF]">
                {item.term}
              </h3>
              <p className="text-gray-700 mt-1">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingGlossary;
