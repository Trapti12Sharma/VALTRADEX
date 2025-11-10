import React from "react";
import { motion } from "framer-motion";

const AccountComparisonTable = ({
  title = "Explore Trading Accounts",
  subtitle = "Discover the right trading account for you. Compare models and find your perfect fit.",
  columns = [],
  rows = [],
}) => {
  return (
    <section className="py-20 bg-[#0B0E17] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔹 Section Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-3"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* 🔹 Table Section */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-3 md:grid-cols-3 gap-[1px] bg-[#1C1F29] rounded-2xl overflow-hidden border border-gray-700">
            {/* Table Header */}
            {columns.map((col, index) => (
              <div
                key={index}
                className="bg-[#111319] p-6 flex flex-col justify-center items-center text-center border-r border-gray-800 last:border-none"
              >
                {col.headerType === "spec" ? (
                  <h3 className="text-lg font-semibold text-gray-200">
                    {col.title}
                  </h3>
                ) : (
                  <div>
                    <h3 className="text-lg font-bold mb-4">{col.title}</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#0A33D3] text-white font-semibold px-8 py-3 rounded-md"
                    >
                      Start Now
                    </motion.button>
                    <p className="text-sm text-gray-400 mt-2">
                      try{" "}
                      <a href="#" className="text-[#00CFFF] hover:underline">
                        demo
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Table Rows */}
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`bg-[#111319] text-center text-gray-300 p-5 border-t border-gray-800 ${
                      colIndex < row.length - 1
                        ? "border-r border-gray-800"
                        : ""
                    }`}
                  >
                    {cell}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountComparisonTable;
