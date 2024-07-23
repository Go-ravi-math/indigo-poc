import React from 'react';
import './SumbitAppBannner.scss';

const SumbitAppBannner = ({ title }) => {
  return (
    <div className="card">
        <div className="card__icon">
        <img src="/assests/6.png" alt="Job Banner" />
        </div>
        <div className="card__content">
            <h2 className="card__title">Congratulations</h2>
            <p className="card__message">Your application has successfully completed.</p>
            <a href="#" className="card__link">Download application form.</a>
        </div>
    </div>
  );
};

export default SumbitAppBannner;