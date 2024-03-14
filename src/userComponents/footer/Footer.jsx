// Footer.js

import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo-white.png';
import JobpostedIcon from '../../assets/images/icon-09.png';
import JobfilledIcon from '../../assets/images/icon-10.png';
import CompaniesIcon from '../../assets/images/icon-11.png';

function Footer() {
    return (
        <footer>
            <div id='footer-container'>
                {/* Top */}
                <div className='footer-head-section'>
                    <div className='footer-body'>
                        <img src={logo} alt='footer logo' />
                        <span>|</span>
                        <p>Create a free account to discover lots of Jobs & Career Opportunities around you!</p>
                    </div>
                    {/* icon1 */}
                    <div className='footer-icons-body'>
                        <div className='footer-icons'>
                            <img src={JobpostedIcon} alt="jobposted" />
                            <div>
                                <h2>1326</h2>
                                <strong>Job Posted</strong>
                            </div>
                        </div>
                        {/* icon2 */}
                        <div className='footer-icons'>
                            <img src={JobfilledIcon} alt="jobposted" />
                            <div>
                                <h2>150</h2>
                                <strong>Job Posted</strong>
                            </div>
                        </div>
                        {/* icon3 */}
                        <div className='footer-icons'>
                            <img src={CompaniesIcon} alt="jobposted" />
                            <div>
                                <h2>220</h2>
                                <strong>Job Posted</strong>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center */}
                <div className='footer-center-head'>
                    <div className='footer-center'>
                        <div className='footer-center-body' style={{ width: '22%' }}>
                            <h3>Contact US</h3>
                            <span >Advertise your jobs to hundreds of thousands of monthly customers
                                and seek 15.8 million CV in our database.</span>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <i className="ri-home-4-fill" />
                                <h5> <a href='#!'>66 Guild Street 512B, Great North Town</a> </h5>

                            </div>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <i className='ri-phone-fill'></i>
                                <h5>
                                    <a href="#!">(+92 304 7533 611)</a>
                                </h5>
                            </div>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <i className="ri-mail-fill footer-icon"></i>
                                <a href='#!'>ameerhamzag75@gmail.com</a>
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className='footer-center-body' style={{ width: '10%' }}>
                            <h3>Information</h3>
                            <h5><a href='#!'>About Us</a></h5>
                            <h5><a href='#!'>Blog</a></h5>
                            <h5><a href='#!'>Our process</a></h5>
                            <h5><a href='#!'>Our price</a></h5>
                            <h5><a href='#!'>Contact Us</a></h5>
                        </div>

                        {/* 3rd */}
                        <div className='footer-center-body' style={{ width: '10%' }}>
                            <h3>Candidates</h3>
                            <h5><a href='#!'>Applied Job</a></h5>
                            <h5><a href='#!'>CV Manager</a></h5>
                            <h5><a href='#!'>Shortlisted Jobs</a></h5>
                            <h5><a href='#!'>Job Alerts</a></h5>
                            <h5><a href='#!'>Dashboard</a></h5>

                        </div>

                        {/* 4rd */}
                        <div className='footer-center-body' style={{ width: '10%' }}>
                            <h3>Employers</h3>
                            <h5><a href='#!'>Job Packages</a></h5>
                            <h5><a href='#!'>Company Profile</a></h5>
                            <h5><a href='#!'>Manage Job</a></h5>
                            <h5><a href='#!'>Resume Alerts</a></h5>
                            <h5><a href='#!'>Post a Job</a></h5>
                        </div>

                        {/* 5rd */}
                        <div className='footer-center-body' style={{ width: '18%' }}>
                            <h3>Join Newsletter</h3>
                            <span>Subscribe to get the latest jobs posted, candidates...</span>
                            <div className='footer-input-wrapper'>
                                <input className="footer-input-field" id="email_address" type="email" name="email_address" placeholder="Subscribe with us" required/>
                                <button type='submit' className='button-inside-input'><i className="ri-send-plane-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className='footer-bottom-head'>
                <div className='footer-bottom'>
                    <p>&#169;2024 Job Board Powered by <span>Ameer Hamza</span></p>
                    <div className='footer-bottom-icons'>
                        <p>Follow Us :</p>
                        <a href='#!' className='icons'><i className="ri-facebook-fill"></i></a>
                        <a href='#!'> <i className="ri-youtube-fill"></i></a>
                        <a href='#!'>  <i className="ri-twitter-fill"></i></a>
                        <a href='#!'> <i className="ri-linkedin-fill"></i></a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
