import React from 'react';
import './JobCard.scss';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

const JobCard = ({id, onClick, position, date, location, openings, from }) => {
    const handleClick = () => {
        if (onClick) {
          onClick(id);  // Pass the id to the onClick handler
        }
      };
  return (
    <div className="job-card" onClick={handleClick}>
        <div className="job-card__details">
            <div className="job-card__top">
                <div className="job-card__icon">
                    <FaBriefcase />
                </div>
                <div className="job-card__position">
                    <h3>{position}</h3>
                    <h4>{position}</h4>
                </div>
                <div className="job-card__actions">
                    {from && from.length > 0 ? <button className="view-details" id="1" onClick={handleClick}>View Details</button> : <MdShare className="job-card__share-icon" />}
                </div>
            </div>
            <div className="job-card__bottom">
                <p className="job-card__bottom__info">
                <FaCalendarAlt /> {date}
                </p>
                <p className="job-card__bottom__info">
                <FaMapMarkerAlt /> {location}
                </p>
                <p className="job-card__bottom__info">{openings}</p>
            </div>
        </div>
    </div>
  );
};

export default JobCard;
