import React from 'react';
import './OpportunityCard.scss';

const OpportunityCard = ({ title }) => {
  return (
    <div className="opportunity-card">
      <h3 className="opportunity-card__title">{title}</h3>
    </div>
  );
};

export default OpportunityCard;
