import hero from '../assets/hero.png'




const Hero = () => {
  


  return (
    <div>
    <div className="relative mx-auto">
    <img src={hero} alt="" className='object-cover w-full min-h[600px]' />
    <div className="absolute inset-0 rounded-md"></div>
    <div className="absolute top-24 left-10 flex flex-col items-start space-y-4 md:block hidden">
      <h2 className="text-white xl:text-6xl font-bold leading-[100px]">Order your <br /> favourite food here..!</h2>
      <p className="text-white text-lg font-semibold ">Delicious food delivered to your door. Choose from a diverse menu featuring a delectable <br /> array of dishes crafted with the finest ingredients and culiniary expertise. <br /> Our mission is to satisfy your cravings and elevate your dining experience, <br />one delicios meal at a time.  </p>
      <button className="px-6 text-xl py-2 bg-white border-black  border-2  text-black  rounded-full">Order Now</button>
    </div>
  </div>

  </div>

  )
}

export default Hero



