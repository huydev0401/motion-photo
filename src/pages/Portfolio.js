import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../img/portfolio/1.png";
import Img2 from "../img/portfolio/2.png";
import Img3 from "../img/portfolio/3.png";
import Img4 from "../img/portfolio/4.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useCursor } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container relative h-full mx-auto">
        <div className="flex flex-col items-center justify-start h-full pt-24 pb-8 text-center lg:flex-row gap-x-24 lg:text-left lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col lg:items-start"
          >
            <h1 className="heading">Portfolio</h1>
            <p className="max-w-xs mb-12">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              cumque eius ullam maxime molestias eaque ut suscipi
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              deleniti sequi veritatis officiis vel alias.
            </p>
            <Link to="/contact" className="btn mb-[30px]">
              Hire me
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="h-full object-cover lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="h-full object-cover lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="h-full object-cover lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="h-full object-cover lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
