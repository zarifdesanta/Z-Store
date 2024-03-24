import React from "react";
import "../styles/Footer.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiSolidCoffeeAlt } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-sub-container">
        <p>2024 &copy; z-store.netlify.app</p>
        <p>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100005783265875"
          >
            <FaFacebookSquare size={20}></FaFacebookSquare>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gazi-md-julcarnine-8bb036237/"
          >
            <FaLinkedin size={20}></FaLinkedin>
          </a>
          <a target="_blank" href="https://twitter.com/julcarnine">
            <FaSquareXTwitter size={20}></FaSquareXTwitter>
          </a>
          <a target="_blank" href="https://zarfdev.netlify.app/">
            <BiSolidCoffeeAlt size={20}></BiSolidCoffeeAlt>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
