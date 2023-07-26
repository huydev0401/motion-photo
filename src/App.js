import React from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { useCursor } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG } = useCursor();
  console.log(useCursor());
  console.log(cursorVariants);
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[30px] h-[30px] fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </div>
  );
};

export default App;
