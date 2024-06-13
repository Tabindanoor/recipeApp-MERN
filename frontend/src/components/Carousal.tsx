import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import hero from '../assets/hero.png'
import hung from '../assets/hung.png'
import burger from '../assets/burger.png'
import wingss from '../assets/wingss.png'
import pizza from '../assets/pizza.png'
import steak from '../assets/steak.png'
import msala from '../assets/msala.png'
import oburg from '../assets/oburg.png'




const Carousal = () => {


  const myImages = [
 
    hero,
    oburg,
    hung,
    burger,
    wingss, 
    pizza,
    steak,
    msala
  ];
  

 
  return (
    <div >
    {/* <SwipeCarousel/> */}
    <h1 className='text-center  text-xl sm:text-2xl  mx-12 md:mx-0  lg:text-4xl font-semibold'>Our Most demanded Items</h1> 
<br />
    <div className="flex justify-center w-full">

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
</div>
</div>
  )
}

export default Carousal
