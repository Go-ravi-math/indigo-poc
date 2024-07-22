import React from 'react';
import { useParams } from 'react-router-dom';
import './JobListPage.scss';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import JobCard from '../JobCard/JobCard';
import { useNavigate } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();

  // Fetch job details based on id if needed
  // For demonstration, we'll use static data
  const navigate = useNavigate();

  const handleJobClick = (id) => {
    console.log('clicked')
    navigate(`/job/${id}`);
  };

  return (
    <div className="job-detail-page">
      <header className="job-detail-page__header">
        <img src="/assests/2.png" alt="Job Banner" className="job-detail-page__header__banner-image" />
      </header>
        <JobCard id="1" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" from="list" />
        <JobCard id="2" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" from="list" />
        <JobCard id="3" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" from="list" />
        <JobCard id="4" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" from="list" />
        <JobCard id="5" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" from="list" />
        <JobCard id="6" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" from="list" />
    </div>
  );
};

export default JobDetailPage;
