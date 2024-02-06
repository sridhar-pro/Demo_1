import React from 'react';
import './Footer.css';
import EmailBox from '../Navbar/EmailBox/EmailBox';

export const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='container'>
            <div className='f-container'>
                <span className='title'>Contact Us!</span>
                <EmailBox />

                <hr/>
                <div className='f-menu'>
                    <span>Home</span>
                    <span>About us</span>
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>What we do</span>
                </div>

                <hr/>

                <span className='text'>Copyright © 2017 WEBOIN</span>
            </div>
        </div>
    </div>
  )
}
