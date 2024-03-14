import React, { useState } from 'react';
import './JobSearch.css';
import { cardsData } from '../../modules/Data';
import { accordionData } from '../../modules/Data';
import job from '../../assets/images/job.png'

const JobSearch = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <>
      <section>
        <div className='second-section'>
          <div className='second-section-text'>
            <h1>Popular Job Categories</h1>
            <p>Know your really worth and find the job that qualifies your life.</p>
          </div>

          <div className='card-container'>
            {cardsData.map((item, index) => (
              <div className='card-item' key={index}>
                <div className='image'>
                  <img src={item.image} alt='Logo' />
                </div>
                <a href=''><h3>{item.title}</h3></a>
                <span>{item.heading}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Jobs */}
      <section>
        <div className='featured-jobs'>
          <div className='featured-head'>
            <h1>Featured Jobs</h1>
            <p>Know your really worth and find the job that qualifies your life.</p>
          </div>

          {/* Onclick elements */}
          <div className='featured-jobs-head'>
            {/* Left side */}
            <div className='featured-jobs-body'>
              {accordionData.map((item, index) => (
                <div className='featured-colors' key={index}>
                  <div className='featured-cards' onClick={() => handleCardClick(index)}>
                    <div className='featured-card-top'>
                      <img src={item.image} alt="..." />
                      <h3>{item.title}</h3>
                    </div>
                    <div className='featured-text'>{item.status}</div>
                  </div>
                  {selectedCard === index && (
                    <div className='featured-card-bottom'>
                      <p>{item.description}</p>
                      <div className='icons'>
                        <div className='first-icons'>
                          <span><i className="ri-map-pin-2-fill"></i>&nbsp;&nbsp;{item.location}</span>
                          <span><i className="ri-cash-line"></i>&nbsp;&nbsp;{item.amount}</span>
                        </div>
                        <a href="#!" className='featured-icon'><i className="ri-heart-line"></i></a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right side */}
            <div className='featured-last-section'>
                <img src={job} alt="Job" />
              <h2>Find Talent From The Featured Ones For Your Dream Job</h2>
              <p>Create the best resume and take a step toward finding your skills job!</p>
              <a href='' className='featured-last-button'>Post Resume</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobSearch;
