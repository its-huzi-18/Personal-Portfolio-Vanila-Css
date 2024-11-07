import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <p className="footerText">
          Copyright &copy; 2024 by Huzaifa | All Rights Reserved.
        </p>
      </div>
      <div>
        <Link
          className="scroll-to-top-button cardTop"
          href="#home"
        >
          <i className="footIcon">
            <FaArrowUp />
          </i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
