import React from 'react';
import './NewsArticle.css'
import blog1 from '../../assets/images/blog-01.jpg'
import blog2 from '../../assets/images/blog-02.jpg'
import blog3 from '../../assets/images/blog-03.jpg'


const NewsArticle = () => {
  return (
    <div className='news-container'>
      <div className='news-container-head'>
        <h1>Recent News Articles</h1>
        <p>Know your really worth and find the job that qualify your life.</p>
      </div>


      <div className='news-cards'>
        {/* 1st card */}
        <div className='new-card-body'>
          <div className='image-blog'>
            <img src={blog1} />
          </div>

          <p><a href='@'>April 18, 2020 &#x2022; 12 comments</a></p>
          <h3> <a href=''>How To Make A Perfect Cv That Attracts The Attention...</a></h3>
        </div>


        {/* 2nd card */}
        <div className='new-card-body'>
          <div className='image-blog'>
            <img src={blog2} />
          </div>
          <p><a href='@'>April 18, 2020 &#x2022; 8 comments</a></p>
          <h3> <a href=''>Points To Be Considered Before Accept Job Offer!...</a></h3>
        </div>

        {/* 3rd card */}
        <div className='new-card-body'>
          <div className='image-blog'>
            <img src={blog3} />
          </div>
          <p><a href='@'>April 18, 2020 &#x2022; 10 comments</a></p>
          <h3> <a href=''>Most Powerful Thing You Have Self Coaching Scholars...</a></h3>
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
