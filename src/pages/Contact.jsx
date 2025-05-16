import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='Contact' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-600'>53:C <br />Johar Town, Lahore</p>
          <p className='text-gray-600'>Phone: +92-333-444-324-1<br />hello@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600 mt-4'>Careers</p>
          <p className='text-gray-600'>Learn more about our team and job openings.</p>
          <button className='mt-4 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            EXPLORE US
          </button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact;
