import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-500 py-10 '>
            <div className='mx-auto container flex  flex-col md:flex-row justify-between '>
                <span className='text-3xl text-white font-bold tracking-tighter'>
                    MERN Eats.com
                </span>
                
                <span className='text-white font-bold tracking-tighter flex gap-4'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>


            </div>
    </div>
  )
}

export default Footer
