import React from "react";
import ABoutImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useCursor } from "../context/CursorContext";

const About = () => {
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
        <div className="flex flex-col items-center justify-center h-full text-center lg:flex-row gap-x-24 lg:text-left lg:pt-16">
          <div className="flex-1 order-2 overflow-hidden max-h-96 lg:max-h-max lg:order-none">
            <img src={ABoutImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="z-10 flex flex-col items-center justify-center flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto lg:items-start"
          >
            <h1 className="heading">About me</h1>
            <p className="max-w-xs mb-12">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              cumque eius ullam maxime molestias eaque ut suscipi
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              deleniti sequi veritatis officiis vel alias.
            </p>
            <Link to="/portfolio" className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
