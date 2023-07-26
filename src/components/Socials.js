import React from "react";
import { ImFacebook, ImYoutube, ImGithub, ImInstagram } from "react-icons/im";
import { useCursor } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <div className="hidden xl:flex ml-24">
      <ul
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="flex gap-x-4 items-center"
      >
        <li>
          <a href="/#" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="/#" target="_blank">
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href="/#" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="/#" target="_blank">
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
