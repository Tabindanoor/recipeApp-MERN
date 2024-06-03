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
    <div >
        <img src={hero} alt="" className='object-cover w-full min-h[600px]' />
        <SwipeCarousel/>
        {/* <div className="flex justify-center w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm md:max-w-xl"
      >
        <CarouselContent>
          {myImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={image} alt={`Carousel item ${index + 1}`} className="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div> */}
    </div>
  )
}

export default Hero
