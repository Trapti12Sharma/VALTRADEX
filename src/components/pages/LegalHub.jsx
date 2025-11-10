import React from "react";

const LegalHub = () => {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">Legal Hub</h1>
        <p className="text-gray-700 text-lg mb-8">
          Review all our legal documentation, policies, and regulatory
          information to ensure transparency and safety.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>📘 Client Agreement</li>
          <li>📄 Privacy Policy</li>
          <li>📜 Risk Disclosure Statement</li>
          <li>🔒 Data Protection Policy</li>
        </ul>
      </div>
    </section>
  );
};

export default LegalHub;
