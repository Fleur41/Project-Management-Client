import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-social-media">
        <a href="https://www.facebook.com/fleur.gael?mibextid=ZbWKwL">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://twitter.com/Fleurkings41?t=Ir1bmudn-9gf-UnlyIEuUQ&s=08">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://instagram.com/fle_ur41?igshid=ZDdkNTZiNTM=">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <SocialIcon url="https://github.com/Fleur41" />
        <SocialIcon url="https://www.linkedin.com/in/simon-muriithi-37b600227/" />
        <SocialIcon url="https://instagram.com/fle_ur41?igshid=ZDdkNTZiNTM=" />
      </div>
      <p>Copyright © 2023 Simon Muriithi</p>
    </footer>
  );
};

export default Footer;