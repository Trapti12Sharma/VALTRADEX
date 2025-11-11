import React from "react";

const LegalHub = () => {
  return (
    <section className="pt-28 pb-16 bg-[#030B17] text-gray-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#00CFFF] mb-4">Legal Hub</h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8">
          Review all our legal documentation, policies, and regulatory
          information to ensure transparency and safety across Valtradex’s
          trading ecosystem.
        </p>

        {/* List of Documents */}
        <ul className="space-y-4 text-lg">
          <li className="flex items-center gap-2 hover:text-[#00CFFF] transition">
            📘 Client Agreement
          </li>
          <li className="flex items-center gap-2 hover:text-[#00CFFF] transition">
            📄 Privacy Policy
          </li>
          <li className="flex items-center gap-2 hover:text-[#00CFFF] transition">
            📜 Risk Disclosure Statement
          </li>
          <li className="flex items-center gap-2 hover:text-[#00CFFF] transition">
            🔒 Data Protection Policy
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LegalHub;
