"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("link1");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["Home", "About", "Skills", "Projects", "Contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { offsetTop, clientHeight } = sectionElement;

        if (
          scrollPosition >= offsetTop + clientHeight / 4 &&
          scrollPosition < offsetTop + (clientHeight * 3) / 4
        ) {
          setActiveLink(`link${index + 1}`);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <div>
      <nav className="headMain">
        <div className="dropMenu">
          <i onClick={toggleMenu} className="iconBar">
            {isOpen ? <FaTimes /> : <FaBars />}
          </i>

          <div id="menu" className={`menuDiv ${isOpen ? "menuVisible" : "menuHidden"}`}>
            <ul className="menuUl">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                <li
                  key={index}
                  className={`custom-i-${index + 1} navbars ${activeLink === `link${index + 1}` ? "clicked" : "unClicked"}`}
                  onClick={() => {
                    setActiveLink(`link${index + 1}`);
                    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
                    toggleMenu(); // Close menu on link click
                  }}
                >
                  <Link href={`#${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="logo">Portfolio.</div>

        <ul className="header">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <li
              key={index}
              className={`custom-i-${index + 1} navbars ${activeLink === `link${index + 1}` ? "active": "inactive"}`}
              onClick={() => {
                setActiveLink(`link${index + 1}`);
                document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Link href={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
