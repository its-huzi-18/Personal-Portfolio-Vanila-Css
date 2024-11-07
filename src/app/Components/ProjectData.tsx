"use client";

import React from "react";
import Image from "next/image";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

interface ImagesProps {
  projectImage: string;
  projectName: string;
  description: string;
  projectWebLink?: string;  // Make it optional to handle undefined cases
  tittle: string;
  index: number;
}

const ImagesProp: React.FC<ImagesProps> = ({ 
  projectImage, 
  projectName, 
  description, 
  projectWebLink, 
  tittle, 
  index 
}) => {
  return (
    <motion.div
      className="projectContainer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <div className="projectImg">
        <div className="imageDiv">
          <Image
            className="projectImage"
            src={projectImage}
            width={300}
            height={300}
            alt="my project"
          />
          <div className="layer">
            <h3 className="layerName">{projectName}</h3>
            <p className="layerText">{description}</p>
            {projectWebLink ? (
              <Link href={projectWebLink} target="_blank">
                <div className="iconCover">
                  <i className="layerIcon">
                    <PiArrowSquareUpRightLight />
                  </i>
                </div>
              </Link>
            ) : (
              <div className="iconCover">
                <i className="layerIcon">
                  <PiArrowSquareUpRightLight />
                </i>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="projectText">{tittle}</p>
    </motion.div>
  );
};

export default ImagesProp;
