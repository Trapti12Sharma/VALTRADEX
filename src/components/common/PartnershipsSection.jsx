import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnershipsSection = ({
  title = "Our Partnerships",
  highlight = ".", // blue highlighted part
  subheading = "",
  paragraph = "",
  images = [],
  settings = {},
}) => {
  // Default slider settings (can be overridden)
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const finalSettings = { ...defaultSettings, ...settings };

  return (
    <section className="relative bg-white text-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          {title}
          <span className="text-[#00CFFF]">{highlight}</span>
        </motion.h2>

        {/* Subheading */}
        {subheading && (
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 mb-4"
          >
            {subheading}
          </motion.h3>
        )}

        {/* Paragraph */}
        {paragraph && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto mb-10 md:mb-12 text-sm md:text-lg leading-relaxed"
          >
            {paragraph}
          </motion.p>
        )}

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <Slider {...finalSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt || "Partnership Image"}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
