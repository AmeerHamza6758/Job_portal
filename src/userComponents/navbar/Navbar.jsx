import React, { useState } from 'react';
import './Navbar.css';
import JobsBoardNoActive from '../../assets/images/logo-white.png';
import JobsBoardActive from '../../assets/images/logo.png';
const Navbar = () => {

  const [scrollbar, setScrollbar] = useState(false)

  const navColorChange = () => {
    if (window.scrollY >= 20) {
      setScrollbar(true)
    }
    else {
      setScrollbar(false)
    }
  }

  window.addEventListener('scroll', navColorChange);

  return (
    <nav className='nabar'>
      <div className={scrollbar ? 'navbar-container' : ''}>
        <div className='navbar-elements'>
          {
            scrollbar ? <img src={JobsBoardActive} alt='logo' /> : <img src={JobsBoardNoActive} alt='logo' />
          }


          <ul className='list-elements'>
            <li><a href='@'>HOME
              <i className="ri-arrow-down-s-line"></i>
            </a>
            </li>

            <li>
              <a href='##' className='navbar-dropdown'>PAGES
                <i className="ri-arrow-down-s-line"> </i></a>
              <ul className='dropdown-content'>
                <li><a href='#!'>About Us</a></li>
                <li><a href='#!'>How it works</a></li>
                <li><a href='#!'>Testimonials</a></li>
                <li><a href='#!'>Pricing Plans</a></li>
                <li><a href='#!'>FAQs</a></li>
                <li><a href='#!'>Contact Us</a></li>
                <li><a href='#!'>User Pages</a></li>
                <li><a href='#!'>Others</a></li>
              </ul>
            </li>

            <li>
              <a href='#!' className='navbar-dropdown-job'>JOB LISTING
                <i className="ri-arrow-down-s-line"></i></a>
              <div  className='dropdown-content-job'>
                <ul>
                <li><h4>JOB LISTING</h4></li>
                <li><a href='#!'>Job Listing 1 - Without Sidebar</a></li>
                <li><a href='#!'>Job Listing 1 - Left Sidebar</a></li>
                <li><a href='#!'>Job Listing 1 - Right Sidebar</a></li>
                <li><a href='#!'>Job Listing 2 - Without Sidebar</a></li>
                <li><a href='#!'>Job Listing 2 - Left Sidebar</a></li>
                <li><a href='#!'>Job Listing 2 - Right Sidebar</a></li>
                </ul>

                <ul>
                <li><h4>JOB GRID</h4></li>
                <li><a href='#!'>Job Grid 1 - Without Sidebar</a></li>
                <li><a href='#!'>Job Grid 1 - Left Sidebar</a></li>
                <li><a href='#!'>Job Grid 1 - Right Sidebar</a></li>
                <li><a href='#!'>Job Grid 2 - Without Sidebar</a></li>
                <li><a href='#!'>Job Grid 2 - Left Sidebar</a></li>
                <li><a href='#!'>Job Grid 2 - Right Sidebar</a></li>
                </ul>

                <ul>
                <li><h4>JOB DETAILS</h4></li>
                <li><a href='#!'>Job Details 1</a></li>
                <li><a href='#!'>Job Details 2</a></li>
                <li><a href='#!'>Job Details 3</a></li>
                </ul>
                </div>
            </li>

            <li><a href='@'>EXPLORE
              <i className="ri-arrow-down-s-line"></i>
            </a>
            </li>

            <li><a href='@'>ELEMENTS
              <i className="ri-arrow-down-s-line"></i>
            </a>
            </li>
            <li><a href='@'>BLOGS
              <i className="ri-arrow-down-s-line"></i>
            </a>
            </li>
          </ul>

          <div className='button-element'>
            <a href='@'><i className="ri-search-line"></i></a>
            <a href='@' className='button'>Post a Job</a>
          </div>
        </div>
      </div >
    </nav>
  );
}

export default Navbar;
