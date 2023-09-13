import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/DreamShaper_v7_Design_a_logo_for_my_website_using_the_name_Aud_3.jpg";
import { Link } from "react-scroll";
import contact from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">
          Home
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">
          About
        </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link activeClass="active" to="bio" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Bio
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}>
        <img src={contact} alt="" className="desktopMenuImg" />
        Contact me
      </button>
      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-90} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-55} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        <Link activeClass="active" to="bio" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Bio
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
