import React from "react";
import { motion } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

/**
 * ✅ Reusable Related Articles Section
 * Props:
 * - title: section heading (e.g., "Related Articles")
 * - buttonText: optional top-right button text
 * - onButtonClick: function for button
 * - articles: [{ image, category1, category2, title, readTime, date, daysAgo }]
 */
const RelatedArticlesSection = ({
  title = "Related Articles",
  buttonText = "Learn more",
  onButtonClick,
  articles = [],
}) => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            {title}
          </h2>
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="border border-[#0040FF] text-[#0040FF] hover:bg-[#0040FF] hover:text-white px-5 py-2 rounded-md transition-all text-sm font-semibold"
            >
              {buttonText} &nbsp;›
            </button>
          )}
        </div>

        {/* ✅ Articles Grid with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index * 0.2}
              className="bg-[#0B0B0B] rounded-xl border border-[#1a1a1a] overflow-hidden hover:border-[#0040FF]/50 transition-all group"
            >
              {/* Article Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-52 object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-2 text-sm">
                  {article.category1 && (
                    <span className="text-[#00CFFF] font-semibold">
                      {article.category1}
                    </span>
                  )}
                  {article.category2 && (
                    <span className="text-[#00CFFF] font-semibold">
                      {article.category2}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg leading-snug mb-3 text-white group-hover:text-[#00CFFF] transition-colors">
                  {article.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center flex-wrap gap-4 text-gray-400 text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span>{article.daysAgo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedArticlesSection;
