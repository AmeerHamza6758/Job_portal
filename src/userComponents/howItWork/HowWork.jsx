import React from 'react';
import './HowWork.css'
const HowWork = () => {
    return (
        <div className='work-container'>
            <div className='work-head'>
                <h1>How It Work?</h1>
                <p>Know your really worth and find the job that qualify your life.</p>
            </div>

            <div className='cards-container'>
                {/* 1thcard */}
                <div className='work-cards'>
                    <div className='line'></div>
                    <div className='number-wrapper'>
                        <div className='number'>01</div>
                    </div>
                    <h3>Create Account</h3>
                    <p>Search all the open positions on the web that suits you.</p>
                </div>
                {/* 2thcard */}
                <div className='work-cards'>
                    <div className='line'></div>
                    <div className='number-wrapper'>
                        <div className='number'>02</div>
                    </div>
                    <h3>CV / Resume Upload</h3>
                    <p>Search all the open positions on the web that suits you.</p>
                </div>

                {/* 3thcard */}
                <div className='work-cards'>
                    <div className='line'></div>
                    <div className='number-wrapper'>
                        <div className='number'>03</div>
                    </div>
                    <h3>Find Your Job</h3>
                    <p>Search all the open positions on the web that suits you.</p>
                </div>

                {/* 4thcard */}
                <div className='work-cards'>
                    <div className='number-wrapper'>
                        <div className='number'>04</div>
                    </div>
                    <h3>Apply Them</h3>
                    <p>Search all the open positions on the web that suits you.</p>
                </div>

            </div>
        </div>
    );
}

export default HowWork;
