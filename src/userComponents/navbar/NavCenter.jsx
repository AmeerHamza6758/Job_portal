import React from 'react';
import './NavCenter.css'
import Typewriter from "typewriter-effect";

const NavCenter = () => {

    return (
        <section className='navcenter'>
            <div className='select-side'>
                <hr className='nav-bottom-bar' />
                <div className='select-element'>

                    <h1>
                        YOU CAN CHOOSE YOUR &nbsp;
                        <span className='textAnimation'>
                            <Typewriter
                                options={{
                                    strings: ['JOBS', 'CAREERS'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </h1>
                    <p>Find perfect job for build your skills. Have many job in this platform.</p>
                    <div className='input-fields'>

                        <input type='text' placeholder='Job title, keywords, or company' />
                        <input type='text' placeholder='City or postcode' />
                        <select aria-label='All Categories'>
                            <option>All Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>


                        <div className='center-button'>
                            <i className="ri-search-line"></i>
                            <span>Find a Job</span>
                        </div>
                    </div>

                    <ul className='last-items'>
                        <li className='first-li'>Popular Searches :</li>
                        <li>Designer </li>
                        <li>Developer</li>
                        <li>Web</li>
                        <li>IOS</li>
                        <li>PHP</li>
                        <li>Engeenier</li>
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default NavCenter;
