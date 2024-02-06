"use client"

import React, { useState } from 'react';
import './Navbar.css';
import {BiMenuAltRight} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import Image from 'next/image';
// import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const {scrollYProgress} = useScroll();
    useMotionValueEvent (scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
        setNavStyle("sticky");
        } else {
        setNavStyle("");
        }
        });
  return (
    <div className={`n-wrapper ${navStyle}`}>
     <div className='container'>
        <div className='n-container'>
            <div className='n-logo'>
                {/* <span>WEBOIN</span> */}
                <Image src='/hero/log.png' alt='logo' width={180} height={50}/>
            </div>
            <div className='n-right'>
                <div className='n-menu'>
                {/* <Link href="/AboutUs">
                <span className='n-menu-item'>About</span>
                </Link> */}
                <Link to='au-wrapper' spy={true} smooth={true}>
                <span className='n-menu-item '>About us</span>
                </Link>
                <Link to='od-wrapper' spy smooth offset={100}>
                <span className='n-menu-item'>Services</span>
                </Link>
                <Link to='pf-wrapper' spy smooth>
                <span className='n-menu-item'>Portfolio</span>
                </Link>    
                <Link to='s-wrapper' spy smooth offset={100}>
                <span className='n-menu-item'>What We Do</span>
                </Link>       
                </div>
                <div className='contact-button'>
                    Contact
                </div>
            </div>
        </div>
     </div>
     <div className='nm-container'>
        <span>WEBOIN</span>

       {!mobileMenuOpened ? (
        <BiMenuAltRight size={30} onClick={()=> setMobileMenuOpened(true )} />
        ) : (
        <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        <div className='nm-menu'
        style={{transform: mobileMenuOpened && "translateX(0%)"}}
        >
        <span>About us</span>
        <span>Services</span>
        <span>Portfolio</span>
        <span>What We Do</span>
        <div className='m-contact-button'>Contact</div>
        </div>
     </div>
    </div>
  )
}

export default Navbar