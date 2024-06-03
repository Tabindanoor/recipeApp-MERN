import hero from '../assets/hero.png'
import { SwipeCarousel } from './SwipeCarousel'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
// import hero from '../assets/hero.png'
import hung from '../assets/hung.png'
import chinese from '../assets/chinese.png'
import download from '../assets/download.png'
import burger from '../assets/burger.png'
import french from '../assets/french.png'
import noodles from '../assets/noodles.png'
import stcik from '../assets/sticks.png'
import order from '../assets/order.png'
import wingss from '../assets/wingss.png'
import pizza from '../assets/pizza.png'
import steak from '../assets/steak.png'
import msala from '../assets/msala.png'
import oburg from '../assets/oburg.png'


const Hero = () => {
  
const myImages = [
 
  hero,
  oburg,
  // order,
  hung,
  // chinese,
  // download,
  burger,
  // french,
  // noodles,
  // stcik,
  wingss, 
  pizza,
  steak,
  msala
];

  return (
    <div>

    <div className="relative mx-auto">
    <img src={hero} alt="" className='object-cover w-full min-h[600px]' />
    <div className="absolute inset-0 rounded-md"></div>
    <div className="absolute top-24 left-10 flex flex-col items-start space-y-4">
      <h2 className="text-white xl:text-8xl font-bold leading-[100px]">Order your <br /> favourite food here..!</h2>
      <p className="text-white text-xl font-semibold ">Delicious food delivered to your door. Choose from a diverse menu featuring a delectable <br /> array of dishes crafted with the finest ingredients and culiniary expertise. <br /> Our mission is to satisfy your cravings and elevate your dining experience, <br />one delicios meal at a time.  </p>
      <button className="px-6 text-xl py-2 bg-orange-900 border-white border-2  text-white rounded-2xl">Order Now</button>
    </div>
  </div>
          {/* <img src={hero} alt="" className='object-cover w-full min-h[600px]' /> */}

  </div>

  )
}

export default Hero



