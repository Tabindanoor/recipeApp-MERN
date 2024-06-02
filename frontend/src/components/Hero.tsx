import hero from '../assets/hero.png'
import { SwipeCarousel } from './SwipeCarousel'

const Hero = () => {
  return (
    <div >
        <img src={hero} alt="" className='object-cover w-full min-h[600px]' />
        <SwipeCarousel/>

      
    </div>
  )
}

export default Hero
