import React from "react";
import MainHeading from "../Components/mainHeading";
import ProjectData from "../Components/ProjectData";
import Link from "next/link";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
function Projects() {
  return (
    <div id="Projects" className="section">
      <MainHeading text1="Latest" text2="Projects" 
      textSize="projectHead"
      />
      <div className="project-container">
        <ProjectData
          tittle="Resume Builder"
          projectImage="/projectImages/resumeImage.jpeg"
          projectName="Resume Builder"
          description="A sleek, Streamlined Design Resume Builder website using HTML, CSS, and TypeScript for quick and customizable resume creation."
          projectWebLink="https://dyamic-cv-maker.vercel.app/" index={1}        />
        <ProjectData 
          tittle="Carmella App"
          projectImage="/projectImages/carmellaApp.jpeg"
          projectName="Carmella App"
          description="A Next.js web app dashboard displaying subject cards (Math, English) by grade and topic, with quick-access icons for Students, Polls, Work, Reports, and Settings."
          projectWebLink="https://carmella-app-react.netlify.app/" index={2}        />
        <ProjectData 
          tittle="Doc Mini App"
          projectImage="/projectImages/docMiniApp.jpeg"
          projectName="Doc Mini App"
          description="This Web App is made with Next.js, features smooth drag-and-drop and seamless animations for an interactive experience"
          projectWebLink="https://doc-mini-app.netlify.app/" index={3}        />
        <ProjectData 
          tittle="TodoList"
          projectImage="/projectImages/todolist.jpg"
          projectName="TaskMaster"
          description="It is a sleek and modern to-do list app that allows you to easily add, view, and delete tasks. Stay organized and boost your productivity with its intuitive interface!"
          projectWebLink="https://react-todolist-tailwind.netlify.app/" index={4}        />
        <ProjectData 
          tittle="OpenShop"
          projectImage="/projectImages/openShop.png"
          projectName="OpenShop"
          description="A Next.js OpenShop dashboard showing sales, expenses, orders, and customer metrics, with recent orders and popular products."
          projectWebLink="https://openshop-site.netlify.app/" index={5}        />
        <ProjectData 
          tittle="PanaCloud Web"
          projectImage="/projectImages/PanaCloud.jpeg"
          projectName="PanaCloud Web"
          description=" A portfolio website built using HTML and CSS. This project is part of assignment for GAIAC program. It's fully optimized for all devices."
          projectWebLink="https://pana-cloud-portfolio-website.vercel.app/" index={6}        />
      </div>
      <div className="projectBox">
<Link href="/More_Projects">
      <button className="projectBtn cardTop"><span className="seeMoreDiv">See More <i className="
       seeMoreIcon "><PiArrowSquareUpRightLight/></i></span>
          </button>
</Link>
      </div>
    </div>
  );
}

export default Projects;
