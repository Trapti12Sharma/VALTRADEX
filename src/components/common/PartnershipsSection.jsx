import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partnership1 from "../../assets/homepage11.png"; // first slide image
import partnership2 from "../../assets/homepage12.png"; // second slide image

const PartnershipsSection = () => {
  const settings = {
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

  return (
    <section className="relative bg-white text-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-12"
        >
          Our partnerships<span className="text-[#00CFFF]">.</span>
        </motion.h2>

        {/* Double Slider */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <Slider {...settings}>
            <div>
              <img
                src={partnership1}
                alt="Portugal Football Federation Partnership"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div>
              <img
                src={partnership2}
                alt="Valtradex Global Sponsorship"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
