"use client"

import React from 'react';
import './Aboutus.css';
import { features } from '../../src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../src/utils/animation';
import { Link, animateScroll as scroll } from 'react-scroll';
import CountUp from 'react-countup';

const AboutUs = () => {
  return (
    <div className='img'>
    <div className='au-wrapper'>
        <div className='container'>
            <div className='au-container'>
            <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'>About Us</motion.span>  
            <div className='au-spe'>
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className='tag'>We are specialized in Digital Marketing</motion.div>
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className='description'>WEBOIN TECHNOLOGIES is one of the fastest growing digital marketing agency which works on a mission to meet all the needs of our clients in every possible way We are a young and energetic team of enthusiastic professionals who believe in innovative strategies and out-of-the-box solutions. We believe in leading this digital marketing world with our endless desires and addiction to the work. We strive to offer digital planning, strategizing, and creativity, resulting in fully managed.</motion.div>
                
                <div className='au-blocks'>
                    <div className='au-block'>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='sec-title'>Digital Marketing</motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='next'>Best Digital Marketing Company in Chennai
                        </motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='next-2'>
                        Advertising is one of the best thing to drive paid traffic to your website, where people can see your offers instantly and followers can be increased rapidly.
                        </motion.span>
                        
                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='feat'>
                        
                        <div>
                        <span className='point'>Small businesses should consider the huge marketplace of prospects online. No small business, no matter how new, should overlook this vast marketplace.</span>
                        <br/>
                        <span className='point'>The ability to reach a global marketplace and the ability to interact with your prospects can be done only with the best Digital Marketing strategies.</span>
                        <br/>
                        <span className='point'>Digital Marketing is the greatest tool to market your products or services in a digital platform and to make your business the biggest hit.</span>
                        <br/>
                        <span className='point'>Analysis of what exactly they are looking for should be known very well to get more profitable results for your product.</span>
                        <br/>
                        <span className='point'>Marketing has always been about connecting with your audience in the right place and at the right time.</span>
                        </div>
                        </motion.div>
                        {/* <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='text'>Why more hunger for Digital Marketing?</motion.span>
                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='feat'>
                        Digital Marketing is an action carried out by the use of numerous digital tactics and channels to connect with customers which in turn helps towards the promotion of your goods and services.
                        Most purchasing decisions are taken online, which gradually creates more hunger for digital marketing.
                        If its the reality  then online presence is very much necessary for your product regardless of what you sell.
                        </motion.div>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='text'>Why We Are Best Digital agency</motion.span>
                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='feat'>
                        Weboin is the best platform to bring your product on top of this digital world. We have everything that you need to take your business idea alive, and you can watch your website turn into a profitable online business.
                        A team of the best digital marketers is present to have a clear picture of how each asset or tactics work and helps you to reach your goals in a short period of time. Digital platforms are increasingly incorporated into marketing plans and everyday life
                        </motion.div> */}
                    </div>
                    
                </div>

                <div>
                    
                </div>
                
                
            </div>
            
            <div className='count'>
            <div className='co'>
            <CountUp start={0} end={10} duration={5} />+
            <br/>Years of experience
            </div>
            
            <div className='co'> 
            <CountUp start={0} end={250} duration={5} />+
            <br/>Satisfied customers
            </div>

            <div className='co'>
            <CountUp start={0} end={650} duration={5} />+
            <br/> Finished Projects
            </div>
            </div>
            
                <div className='au-head'>
                    
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>
                    {" "} 
                    WEBOIN TECHNOLOGIES, is one of the fastest growing 
                    <br /><span className='cont'>Digital Marketing Agency</span></motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='des'>We are specialized in Digital Marketing</motion.span>
                </div>
                    
                <div className='au-blocks'>
                    <div className='au-block'>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='sec-title'>Our Standards</motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='text'>Weboin is the best platform to bring your product.</motion.span>
                        <div className='block-features'>
                            {
                                features.slice(0, 3).map((feature, i)=> (
                                    <motion.div 
                                     initial="offscreen"
                                     whileInView={"onscreen"}
                                     variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='au-block'>
                    <motion.span 
                     initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='sec-title'>Our Capabilities</motion.span>
                        <motion.span 
                         initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='text'>Our ideas, creativity & thoughtful executions.</motion.span>
                        <div className='block-features'>
                            {
                                features.slice(3, 6).map((feature, i)=> (
                                    <motion.div 
                                     initial="offscreen"
                                     whileInView={"onscreen"}
                                     variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>

                <motion.div 
                 initial="offscreen"
                 whileInView={"onscreen"}
                 variants={containerVariants(0.3)}
                className='au-support'>
                <div>
                    <span className='sec-title'>Our Principles</span>
                    <span className='des'>
                    At WEBOIN TECHNOLOGIES, we redefine how users interact with digital applications<br /> by making the interfaces visually appealing
                    </span>
                    </div>

                    <div>
                        <span className='text'>
                        We research, solve, design, analyze and develop. Our primary aim is not designing for our clients, but designing for their users.
                        </span>
                        <span className='text'>
                        Our main work is not only introducing your brands, its products and services to market, we also provide online customer support 24/7 to make customers feel promoted and high powered.
                        </span>
                    </div>
                </motion.div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs