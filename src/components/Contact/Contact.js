import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import YoutubeIcon from "../../assets/youtube.png";
import TwitterIcon from "../../assets/twitter.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_oagv3jw", "template_q37b3qf", form.current, "LMxKKBTr_l7LhcvQu").then(
      (result) => {
        console.log(result.text);
        form.current.reset(); // Memanggil fungsi reset pada elemen form
        alert("Your Message Has been Sent!");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contactPage">
      <div id="bio">
        <h1 className="bioPageTitle">My Biodata</h1>
        <div className="biodata">
          <div className="bioCard">
            <h2>Name : Muhammad Audya Fadhlurrohman</h2>
            <p>Age : 22 Years</p>
            <p>
              Address : Kp. Kebon Rumput No.24 RT 04 Rw 06 Desa Pasir Jambu Sukaraja,
              <br />
              Kabupaten Bogor, Jawa Barat, Indonesia
            </p>
            <p>Birthdate : July 6th 2001</p>
            <p>Hobbies : Gaming, Basketball</p>
            <p>Dreams : I wanna be a person that can make my mom proud.</p>
          </div>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill up the form below to discuss any work opportunity</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name"></input>
          <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
