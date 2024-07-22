import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetailPage.scss';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();

  // Fetch job details based on id if needed
  // For demonstration, we'll use static data
  const navigate = useNavigate();

  const handleApplyClick = (id) => {
    console.log('clicked')
    navigate(`/template/${id}`);
  };

  // Fetch job details based on id if needed
  // For demonstration, we'll use static data
  const jobDetails = {
    id: 1,
    position: "Officer - AO&CS",
    bannerImage: "path/to/your/banner/image.jpg",
    startDate: "09 May 2024",
    location: "Kochi, KL, IN",
    company: "Indigo",
    eligibility: "Eligibility criteria goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    description: "Job Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. goes here...",
    responsibilities: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  };

  return (
    <div className="job-detail-page">
      <header className="job-detail-page__header">
        <img src="/assests/1.png" alt="Job Banner" className="job-detail-page__header__banner-image" />
      </header>
      <div className="job-detail-page__content">
        <label className="job-detail-page__content__title"> <span className="icon">
            <FaBriefcase />
        </span>
        {jobDetails.position}</label>
        <div className="job-detail-page__actions">
          <button className="job-detail-page__apply-button" onClick={handleApplyClick}>Apply</button>
          <button className="job-detail-page__share-button"> <MdShare className="job-card__share-icon" /> Share</button>
        </div>
        <div className="job-detail-page__content__details">
          <p><strong>Start Date:</strong> {jobDetails.startDate}</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Company:</strong> {jobDetails.company}</p>
          <p><strong>Eligibility:</strong> {jobDetails.eligibility}</p>
          <p><strong>Description:</strong> {jobDetails.description}</p>
          <p><strong>Responsibilities:</strong> {jobDetails.responsibilities}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
