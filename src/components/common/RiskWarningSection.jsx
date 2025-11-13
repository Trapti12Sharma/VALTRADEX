import React from "react";

/**
 * Reusable Risk Warning Section
 * Props:
 * - title: string (main heading)
 * - paragraphs: array of strings (each paragraph line)
 * - brandName: string (for replacing company name dynamically)
 * - copyrightYear: number or string
 */
const RiskWarningSection = ({
  title = "Risk Warning:",
  paragraphs = [],
  brandName = "Valtradex",
  copyrightYear = new Date().getFullYear(),
}) => {
  return (
    <section className="bg-[#F9FAFB] text-[#1F2937] py-12 px-6 md:px-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-sm leading-relaxed space-y-6">
        {/* 🔹 Title */}
        <h3 className="font-semibold text-base text-gray-900">{title}</h3>

        {/* 🔹 Paragraphs */}
        {paragraphs.map((text, idx) => (
          <p key={idx} className="text-gray-700">
            {text.replace(/Valtradex/g, brandName)}
          </p>
        ))}

        {/* 🔹 Copyright */}
        <p className="text-gray-700 pt-4">
          Copyright © {copyrightYear} {brandName}.
        </p>
      </div>
    </section>
  );
};

export default RiskWarningSection;
