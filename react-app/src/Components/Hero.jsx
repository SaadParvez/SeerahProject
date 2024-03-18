import React, { useState } from "react";
import styles from '../style'
import {discount} from '../assets';
import GetStarted from './GetStarted'

const Hero = () => {
 

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>

            <span className="text-white">Information
            </span> For The {" "}
            <span className="text-white">Next Generation</span>
          </p>

        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Accessible <br className="sm:block hidden"/>{" "}         
            <span className="text-gradient">Reliable<br className="sm:block hidden"/>{" "} </span>
            Intuitive
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>

        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A website for getting accurate information on our Prophet Muhammad's (PBUH) life and the events that took place during his time which make him the renowned figure remembered today.</p>
      </div>
      
      <div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>

        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"/>

        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>

      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    
    
    </section>
    
  )
}

export default Hero