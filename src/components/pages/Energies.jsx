import React from "react";
// import energiesBg from "../../../assets/markets/energies.jpg";

const Energies = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[70vh] flex items-center"
      //   style={{ backgroundImage: `url(${energiesBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-left px-6 text-white">
        <h1 className="text-5xl font-bold mb-4">Energies</h1>
        <p className="text-lg text-gray-200 max-w-2xl">
          Trade energy commodities like Crude Oil, Brent Oil, and Natural Gas.
          Valtradex provides transparent pricing and powerful trading tools.
        </p>
      </div>
    </section>
  );
};

export default Energies;
