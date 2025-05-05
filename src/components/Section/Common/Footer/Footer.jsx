/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="zubuz-footer-section main-footer white-bg">
      <div className="container">
        
        <div className="zubuz-footer-bottom">
          <div className="zubuz-social-icon order-md-2">
            <ul>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <FaTwitter className="footerIcon"/>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/" target="_blank">
                  <FaFacebookF className="footerIcon"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="footerIcon"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="footerIcon"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <FaGithub className="footerIcon"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="zubuz-copywright">
            <p className="footerText"> Copyright &copy; 2025, All Rights Reserved By MV Tech Digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
