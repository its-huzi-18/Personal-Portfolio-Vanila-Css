"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import MainHeading from "../Components/mainHeading";
import Projects from "../Projects/page";

type SkillName =
  | "HTML"
  | "CSS"
  | "TypeScript"
  | "Tailwind"
  | "React"
  | "Next.js";

interface Skill {
  name: SkillName;
  icon: JSX.Element;
  target: number;
}

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 />, target: 90 },
  { name: "CSS", icon: <FaCss3Alt />, target: 85 },
  { name: "TypeScript", icon: <BiLogoTypescript />, target: 75 },
  { name: "Tailwind", icon: <RiTailwindCssFill />, target: 80 },
  { name: "React", icon: <FaReact />, target: 88 },
  { name: "Next.js", icon: <RiNextjsFill />, target: 70 },
];

function Skills() {
  const [skillPercentages, setSkillPercentages] = useState<
    Record<SkillName, number>
  >({
    HTML: 0,
    CSS: 0,
    TypeScript: 0,
    Tailwind: 0,
    React: 0,
    "Next.js": 0,
  });

  const [professionalSkillPercentages, setProfessionalSkillPercentages] =
    useState<number[]>([0, 0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500);

    const skillTimers = skills.map((skill, index) =>
      setTimeout(() => {
        setSkillPercentages((prev) => ({
          ...prev,
          [skill.name]: skill.target,
        }));
      }, 500 + index * 500)
    );

    const professionalSkills = [90, 72, 65, 80];
    const professionalTimers = professionalSkills.map((target, index) =>
      setTimeout(() => {
        setProfessionalSkillPercentages((prev) => {
          const updated = [...prev];
          updated[index] = target;
          return updated;
        });
      }, 500 + (skills.length + index) * 500)
    );

    return () => {
      clearTimeout(backgroundTimer);
      skillTimers.forEach((timer) => clearTimeout(timer));
      professionalTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [isInView]);

  const radius = 37;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="skillPage">
      <div ref={skillsRef} id="Skills">
        <div className="skillHead">
          <MainHeading text1="My" text2="Skills" textSize="skillH1" />
        </div>
        <h2 className="techHead tagHead">
          Technical Skills
        </h2>
        <div className="skillDiv">
          <div className="techSkills logo">
            {skills.map((skill: Skill) => (
              <div key={skill.name} className="skillBox">
                <i
                  className={`text-2xl ${
                    skill.name === "HTML"
                      ? "text-orange-500"
                      : skill.name === "CSS"
                      ? "text-sky-600"
                      : skill.name === "TypeScript"
                      ? "text-cyan-500"
                      : skill.name === "Tailwind"
                      ? "text-sky-500"
                      : skill.name === "React"
                      ? "text-sky-300"
                      : "text-white"
                  }`}
                >
                  {skill.icon}
                </i>
                <div className="text-lg">{skill.name}</div>
                <div className="skillName">
                  <span
                   className={`skillFill ${showBackground ? "skillFill-filled" : "skillFill-empty"}`}
                    style={{
                      width: `${skillPercentages[skill.name]}%`,
                      transition:
                        "width 1s ease-in-out, background-color 0.5s ease-in-out",
                    }}
                  ></span>
                </div>
                <div className="text-right">
                  {skillPercentages[skill.name]}%
                </div>
              </div>
            ))}
          </div>

          <div className="proContainer skillLeft">
            <h2 className="proSkillH2 ">
              Professional Skills
            </h2>
            <div className="proSkillDiv">
              {[
                "Creativity",
                "Communication",
                "Problem Solving",
                "Team Leadership",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="proSkills"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <svg
                    width="110"
                    height="110"
                    viewBox="0 0 92 92"
                    className="circleSize"
                  >
                    <circle
                      cx="45"
                      cy="45"
                      r="37"
                      fill="none"
                      stroke="#323946"
                      strokeWidth="5"
                    ></circle>
                    <circle
                      cx="45"
                      cy="45"
                      r="37"
                      fill="none"
                      stroke="#0ef"
                      strokeWidth="5"
                      strokeDasharray={`${
                        circumference *
                        ((hoveredIndex === index
                          ? Math.max(
                              0,
                              professionalSkillPercentages[index] - 40
                            )
                          : professionalSkillPercentages[index]) /
                          100)
                      } ${circumference}`}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dasharray 1s ease-in-out",
                      }}
                    ></circle>
                    <text
                      x="45"
                      y="50"
                      className="circles"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      {hoveredIndex === index
                        ? Math.max(0, professionalSkillPercentages[index] - 40)
                        : professionalSkillPercentages[index]}
                      %
                    </text>
                  </svg>
                  <div className="circleText">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <Projects />
      </div>
    </div>
  );
}

export default Skills;
