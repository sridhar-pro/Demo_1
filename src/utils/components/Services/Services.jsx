import React from 'react';
import './Services.css';
import SlickSlider from './SlickSlider';

const Services = () => {
  return (
    <div className='s-wrapper'>
        <div className='container'>
            <div className='s-container'>
                <div className='s-head'>
                    <span className='tag'>Weboin testimonials</span>
                    <span className='title'>Digital Marketing, SEO, SEM, SMO Services</span>
                    <span className='des'>What people say about us</span>
                </div>
            </div>

            <SlickSlider />
        </div>
    </div>
  )
}

export default Services