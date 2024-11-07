"use client"
import React, { useRef, useEffect } from "react";
import Icons from "./Icons";
import Typed from "typed.js";
import HomeImage from "./HomeImage";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Frontend Developer</i>", "&amp; Blogger."],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
      startDelay: 900,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="homeMain">
        <div className="homeContainer">
          <h3 className="smallText tagHead">Hellow, It's Me</h3>
          <h1 className="mediumText tagName">Huzaifa Wahab</h1>
          <h3 className="smallText tagHead">
            I'm a{" "}
            <span className="text-hoverColor">
              <i ref={el}></i>
            </span>
          </h3>
          <p className="homeLines tagLines">
            Crafting seamless user experiences through innovative front-end
            development, I create responsive and visually appealing web
            applications that engage users and enhance interaction
          </p>
          <div>
            <Icons />
          </div>
          <div>
            <a href="/myCv.pdf" download="myCv.pdf">
              <button className="btn cvBtn">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="imgDiv">
          <HomeImage />
        </div>
      </div>
    </>
  );
}

