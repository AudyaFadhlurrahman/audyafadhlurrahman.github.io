import React from "react";
import "./Skills.css";
import uiDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";
import office from "../../assets/images.png";
import selenium from "../../assets/Selenium_Logo.png";
import corel from "../../assets/coreldraw-removebg-preview.jpg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">I am a skilled ReactJs Programmer. I'm from Institute Business and Information Kesatuan Bogor Indonesia. And I'm 22 Years Old.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="uiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Test Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Test Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={selenium} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Selenium</h2>
            <p>Test Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={office} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Office</h2>
            <p>Test Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={corel} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CorelDraw</h2>
            <p>Test Text</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
