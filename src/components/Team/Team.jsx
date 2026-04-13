import React from "react";
import "./Team.css";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";

import { FaInstagram, FaFacebookF, FaTwitter, FaPhone, FaEnvelope, FaYoutube } from "react-icons/fa";

const data = [
  { name: "Victoria Shurpik", img: img1 },
  { name: "Elizabeth Lavrinenko", img: img2 },
  { name: "Ivan Gladkikh", img: img3 },
  { name: "Lyudmila Sabiro", img: img4 },
  { name: "Evgeny Gurkov", img: img5 },
  { name: "Anatoly Prylytsky", img: img6 },
  { name: "Victor Ludkovich", img: img7 },
  { name: "Maria Masyak", img: img8 },
];

function Team() {
  return (
    <>
      <section className="team">
        <h2 className="title">Trainers Staff</h2>

        <div className="grid">
          {data.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>

              <div className="icons">
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-box">
            <h2>GYM24</h2>
            <p>
              Build strength and confidence at our gym with state-of-the-art
              equipment, personalized training, and a motivating community
            </p>
          </div>

          <div className="footer-box">
            <h3>Address</h3>
            <p>
              Republic of Belarus <br />
              Minsk city <br />
              Dzerzhinsky Avenue 15
            </p>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>

            <div className="contact">
              <FaPhone /> <span>+375(44)-777-24-12</span>
            </div>

            <div className="contact">
              <FaEnvelope /> <span>gym24@gmail.com</span>
            </div>

            <div className="socials">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Team;