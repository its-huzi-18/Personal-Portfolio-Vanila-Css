import React from 'react';

interface HeadingProps {
  text1: string;
  text2: string;
  textSize?: string;  // Optional prop with a default value
}

const MainHeading: React.FC<HeadingProps> = ({ text1, text2, textSize = 'text-[2.7rem]' }) => {
  return (
    <div className="main-heading-container ">
      <h2 className={`${textSize} tagHead main-heading-text`}>
        {text1} <span className="colorH2">{text2}</span>
      </h2>
    </div>
  );
};

export default MainHeading;
