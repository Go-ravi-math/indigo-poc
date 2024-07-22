import React from 'react';
import './CareerPage.scss';
import JobCard from '../JobCard/JobCard';
import OpportunityCard from '../OpportunityCard/OpportunityCard';
import { useNavigate } from 'react-router-dom';

const CareerPage = () => {
  const navigate = useNavigate();

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  const handleViewClick = (id) => {
    navigate(`/list/${id}`);
  };
  return (
    <div className="career-page">
      <header className="career-page__header">
        {/* <img src="path/to/your/image.jpg" alt="Indigo plane" className="career-page__header-image" /> */}
        <h1 className="career-page__header-title">
          We are driven by the purpose of giving <span className="career-page__header-title-highlight">wings</span> to the nation by connecting people and aspirations.
        </h1>
      </header>

      <section className="career-page__jobs">
        {/* <h2 className="career-page__section-title">Now hiring</h2> */}
        <div className="career-page__job-list">
          <div className="career-page__job-list-image">
            <img src="https://media.licdn.com/dms/image/D5610AQHc3eDYTC0oxQ/image-shrink_800/0/1714652041848?e=2147483647&v=beta&t=ayIMm8ZMqnpsSwPFxZ6eRW44onISVDVRCj5Mmykc2MU" alt="Description of the image" />
          </div>
          <div className="career-page__job-list-detail">
            <div className="test">
              <button className="career-page__all">All Jobs</button>
              <lable className="label-title">
                Hiring Events
              </lable>
              
            </div>
            <JobCard id="1" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" />
            <JobCard id="2" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" />
            <JobCard id="3" onClick={handleJobClick} position="Officer - AO&CS" date="09 May 2024" location="Kochi, KL, IN" openings="3 positions left" />
            <div className="test bottom">
              <button className="career-page__view-all" id="1" onClick={handleViewClick}>View all</button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="career-page__opportunities">
        <h2 className="career-page__section-title">One airline, many opportunities</h2>
        <div className="career-page__opportunity-list">
          <OpportunityCard title="Diversity & Inclusion" />
          <OpportunityCard title="Benefits" />
          <OpportunityCard title="Recognition" />
          <OpportunityCard title="6E Culture" />
          <OpportunityCard title="Airport operations and customer services" />
          <OpportunityCard title="Cargo" />
          <OpportunityCard title="Engineering" />
          <OpportunityCard title="Flight Operations" />
        </div>
      </section> */}
    </div>
  );
};

export default CareerPage;
