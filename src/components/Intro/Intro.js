import React from "react";
import bg from "../../assets/WhatsApp_Image_2023-07-29_at_11.43.23-removebg-preview.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Audy</span>
          <br />
          Frontend Website Developer
        </span>
        <p className="introPara">I'm a Student at Institute of Business and Information Kesatuan</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="hireme" className="btnImg" />
            Hire Me!
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
