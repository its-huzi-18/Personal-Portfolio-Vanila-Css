import React, { useState } from 'react';

// Define the props interface
interface ShowMoreTextProps {
  text: string; 
  limit?: number; 
  buttonStyles?: string; 
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({ text, limit = 160, buttonStyles = 'custom-text'}) => { // Default limit is set to 160 and default button styles
  const [isExpanded, setIsExpanded] = useState<boolean>(false); 

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.slice(0, limit)}...`} 
      </p>
      <button
        onClick={toggleExpand}
        className={`${buttonStyles} btn showMoreBtnSize`}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ShowMoreText;
