import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer noto">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <p className="footer-heading">
            BrillX makes every question an adventure.
            <br />
            Let’s start yours today!
          </p>

          <div className="footer-buttons">
            <a href="https://thebrillx.vercel.app" target='_blank' rel="noopener noreferrer">
              <button className="btn">Start Learning Free</button>
            </a>
          </div>

          <p className="footer-copy">
            BrillX © 2025 — Learning made joyful, for everyone.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <span className="creator-title">Creator</span>
          <div className="creator-links">
            <a
              href="https://github.com/jagdep-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <FaGithub />
              <span>Jagdeep Singh</span>
            </a>
            <a
              href="https://github.com/jagdep-singh/brillx"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <FaGithub />
              <span>Project Repo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
