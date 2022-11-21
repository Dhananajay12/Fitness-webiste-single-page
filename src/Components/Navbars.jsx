import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

import logo from "./Images/logo.jpg";

const Navbars = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [color, setColor] = useState(false);

  const [logos, setLogo] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const changeLogo = () => {
    if (window.scrollY >= 50) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };
  window.addEventListener("scroll", changeLogo);

  const RenderMenu = () => {
    if (logos) {
      return (
        <>
          <img src={logo} alt="erroe" className="logo-img mt-3"></img>
        </>
      );
    } else {
      return (
        <>
          <span
            className=" h1"
            style={{ color: "rgb(197, 16, 46)", fontWeight: "bold" }}
          >
            F
          </span>
          itness
          <span
            className=" h1"
            style={{ color: "rgb(197, 16, 46)", fontWeight: "bold" }}
          >
            C
          </span>
          lub
        </>
      );
    }
  };

  return (
    <>
      <nav
        className={color ? "main-nav  main-nav-bg shadow-nav" : "main-nav "}
        style={{ position: "fixed" }}
      >
        <div className="logo">
          <h2 style={{ color: "white" }}>
            <RenderMenu></RenderMenu>
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link " : "menu-link"
          }
        >
          <ul className="margin-for-navfont">
            <li className="color">
              <Link to="trainer" className=" color  height-fontnav h5 ">
                Trainers
              </Link>
            </li>

            <li className="color ">
              <Link to="features" className=" color height-fontnav h5">
                Features{" "}
              </Link>
            </li>
            <li className="color  ">
              <Link to="aboutus" className=" color  height-fontnav h5">
                About
              </Link>
            </li>

            <li className="color ">
              <Link to="offer" className="color  height-fontnav h5">
                Offer{" "}
              </Link>
            </li>
            <li className="color">
              <Link to="contact" className=" color  height-fontnav h5">
                Contact
              </Link>
            </li>

            <AiOutlineClose
              className="display text-white mx-3"
              onClick={() => setShowMediaIcons(false)}
            />
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="/">
                <i
                  className="fa fa-instagram zoom text-white"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i
                  className="fa fa-facebook-official zoom text-white"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i
                  className="fa fa-twitter zoom text-white"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu className="" style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
