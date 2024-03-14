import React from 'react';
import './HiringCompanies.css';
import { CompaniesData } from '../../modules/Data'

const HiringCompanies = () => {
    return (
        <section className='companies'>
                <h1>Top Hiring Companies</h1> <br />
                <p>Know your really worth and find the job that qualify your life.</p>

            <div className='xx'>
                {CompaniesData.map((item, index)=>
                    (
                <div className='companies-card'>
                    <div className=''>
                        <img src={item.image} alt='logo' />
                    </div>
                    <div className='companies-card-body'>
                     <h3>{item.title} </h3>
                        <div className="star-rating">
                            <span >
                                <i className="ri-star-fill star"></i>
                                <i className="ri-star-fill star"></i>
                                <i className="ri-star-fill star"></i>
                                <i className="ri-star-fill star"></i>
                            </span>
                            <span className="star-rating-bg">4.0</span>
                            <span className="vertical-align-middle"><i className="ri-map-pin-line"></i>{item.location}</span>
                        </div>
                        <div>
                            <span className="company-info-time">Full Time</span>
                            <span className="company-info-privacy">Private</span>
                            <span className="company-info-required">Urgent</span>
                        </div>
                    </div>
                </div>
                 ))}
            </div>
           
            <div className='companies-button'>
                Load more companies
            </div>
        </section>
    );
}

export default HiringCompanies;
