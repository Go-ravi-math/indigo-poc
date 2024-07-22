import React from 'react';
import { useParams } from 'react-router-dom';
import './ApplyJobTemplate.scss';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

const ApplyJobTemplate = () => {
  const { id } = useParams();

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
    <>
    <form className="job-application-form">
        <header className="job-detail-page__header">
            <img src="/assests/3.png" alt="Job Banner" className="banner-image" />
        </header>
        <section className='job-title'>
            <label className="content__label"> <span className="icon">
                <FaBriefcase />
            </span>
                {jobDetails.position}</label>
        </section>
      <section className="job-application-form__section job-application-form__section--upload">
        <label className="job-application-form__title" htmlFor="resume">
          Upload Resume<strong>*</strong>
        </label>
        <div className="custom-file-upload">
          <input
            type="file"
            id="file-upload"
            accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
          />
          <label for="file-upload">
            <span className="file-upload__image">
            <img className="file-upload__image" src="/assests/5.png" alt="Job Banner"/>
            </span>
            <span className="file-upload__text">
              Drop your image here, or <strong style={{color:'#1F4690'}}>browse</strong>
            </span> 
            <span className="file-upload__info">
              Supports doc, docx or pdf (3 Mt Max)
            </span>
          </label>
        </div>
        <div className='linkedIn'>

            <button className="submit-button">Apply with linkedIn</button>
        </div>
      </section>

      <section className="job-application-form__section job-application-form__section--personal-details">
        <lable className="job-application-form__title">Personal Details</lable>
        <div className="job-application-form__row">
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="name">
              Name<strong style={{color:'red'}}>*</strong>
            </label>
            <input
              className="job-application-form__input"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="email">
              Email<strong style={{color:'red'}}>*</strong>
            </label>
            <input
              className="job-application-form__input"
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div className="job-application-form__row">
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="gender">
              Gender<strong style={{color:'red'}}>*</strong>
            </label>
            <select
              className="job-application-form__select"
              id="gender"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="dob">
              Date of Birth<strong style={{color:'red'}}>*</strong>
            </label>
            <input
              className="job-application-form__input"
              type="date"
              id="dob"
              name="dob"
            />
          </div>
        </div>

        <div className="job-application-form__row">
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="city">
              City<strong style={{color:'red'}}>*</strong>
            </label>
            <input
              className="job-application-form__input"
              type="text"
              id="city"
              name="city"
            />
          </div>
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="country">
              Country<strong style={{color:'red'}}>*</strong>
            </label>
            <select
              className="job-application-form__select"
              id="country"
              name="country"
            >
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
              <option value="india">India</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="job-application-form__row">
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="gender">
              Gender<strong style={{color:'red'}}>*</strong>
            </label>
            <select
              className="job-application-form__select"
              id="gender"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="dob">
              Date of Birth<strong style={{color:'red'}}>*</strong>
            </label>
            <input
              className="job-application-form__input"
              type="date"
              id="dob"
              name="dob"
            />
          </div>
        </div>

        <div className="job-application-form__row">
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="gender">
              Gender<strong style={{color:'red'}}>*</strong>
            </label>
            <select
              className="job-application-form__select"
              id="gender"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="job-application-form__field">
            <label className="job-application-form__label" htmlFor="dob">
              Date of Birth<strong style={{color:'red'}}>*</strong>
            </label>
            <input
              className="job-application-form__input"
              type="date"
              id="dob"
              name="dob"
            />
          </div>
        </div>
      </section>

      <section className="job-application-form__section job-application-form__section--work-experience">
        <lable className="job-application-form__title">Work Expirence</lable>
        <div className="job-application-form__field">
          <label className="job-application-form__label" htmlFor="job-title">
            Job Title<strong style={{color:'red'}}>*</strong>
          </label>
          <input
            className="job-application-form__input"
            type="text"
            id="job-title"
            name="job-title"
          />
        </div>
        <div className="job-application-form__field">
          <label className="job-application-form__label" htmlFor="company-name">
            Company Name<strong style={{color:'red'}}>*</strong>
          </label>
          <input
            className="job-application-form__input"
            type="text"
            id="company-name"
            name="company-name"
          />
        </div>

        <div className="job-application-form__field">
          <label
            className="job-application-form__label"
            htmlFor="role-description"
          >
            Role Description<strong style={{color:'red'}}>*</strong>
          </label>
          <textarea
            className="job-application-form__textarea"
            id="role-description"
            name="role-description"
          ></textarea>
        </div>

        <div className="job-application-form__field">
          <label className="job-application-form__label" htmlFor="location">
            Location<strong style={{color:'red'}}>*</strong>
          </label>
          <input
            className="job-application-form__input"
            type="text"
            id="location"
            name="location"
          />
        </div>
        <div className="job-application-form__field">
          <label
            className="job-application-form__label"
            htmlFor="total-work-experience"
          >
            Total Work Experience<strong style={{color:'red'}}>*</strong>
          </label>
          <input
            className="job-application-form__input"
            type="number"
            id="total-work-experience"
            name="total-work-experience"
          />
        </div>

        <div className="job-application-form__field">
          <label
            className="job-application-form__label"
            htmlFor="previous-company"
          >
            Have you previously worked in this company?
          </label>
          <select
            className="job-application-form__select"
            id="previous-company"
            name="previous-company"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="job-application-form__field">
          <label
            className="job-application-form__label"
            htmlFor="hear-about-job"
          >
            How did you hear about the job?
          </label>
          <input
            className="job-application-form__input"
            type="text"
            id="hear-about-job"
            name="hear-about-job"
          />
        </div>
      </section>

      <section className="job-application-form__section job-application-form__section--terms">
        <div className="job-application-form__field">
        <label className="job-application-form__checkbox-label">
          <input
            className="job-application-form__checkbox"
            type="checkbox"
            name="terms"
          />
          I accept the terms and conditions
        </label>
        </div>
      </section>

      <section className="job-application-form__actions">
        {/* <button
          className="job-application-form__button job-application-form__button--submit"
          type="submit"
        >
          Submit
        </button>
        <button
          className="job-application-form__button job-application-form__button--cancel"
          type="button"
        >   
          Cancel
        </button> */}

        <button className="cancel-button">Cancel</button>
        <button className="submit-button">Submit</button>
      </section>
    </form>
    </>
  );
};

export default ApplyJobTemplate;
