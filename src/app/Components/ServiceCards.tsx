import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode; 
  title: string;         
  description: React.ReactNode;   
  customClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, customClass }) => {
  return (
    <div className={`cardSize ${customClass}`}>
      <i className="cardIcon">{icon}</i>
      <h3 className="cardTittle ">{title}</h3>
      <div className="cardLines">
        {description}
      </div>
    </div>
  );
};

export default ServiceCard;
