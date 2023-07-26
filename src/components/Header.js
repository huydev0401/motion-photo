import React from "react";
import Social from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useCursor } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] z-30 flex items-center">
      <div className="flex flex-col justify-between w-full lg:flex-row lg:items-center">
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to="/"
          className="max-w-[200px]"
        >
          <img src={Logo} alt="logo" />
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden font-semibold xl:flex gap-x-12"
        >
          <Link to="/" className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Social />
      <MobileNav />
    </header>
  );
};

export default Header;
