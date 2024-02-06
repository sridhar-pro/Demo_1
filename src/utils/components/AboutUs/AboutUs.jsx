"use client"

import React from 'react';
import './AboutUs.css';
import { features } from '../../data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';
import ParticlesContainer from '../ParticlesContainer';
import { Link, animateScroll as scroll } from 'react-scroll';

const AboutUs = () => {
  return (
    <div className='au-wrapper'>
        <div className='container'>
            <div className='au-container'>
            
                <div className='au-head'>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'>About Us</motion.span>
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
  )
}

export default AboutUs