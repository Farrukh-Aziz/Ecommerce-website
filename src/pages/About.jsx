import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>We are a passionate team dedicated to creating powerful and user-friendly web experiences. Our focus is on delivering creative digital solutions tailored to your business needs. From responsive websites to dynamic platforms, we bring ideas to life with precision and care. With a strong commitment to quality, we help brands grow in the digital space</p>
            <p>We believe in combining innovation with simplicity to build solutions that truly make an impact. Our journey started with a shared goal to transform the online presence of small businesses. Over time, we have expanded our services and improved our craft. Today, we continue to evolve, driven by results and client satisfaction.</p>
            <b className='text-gray-800'>Our mission</b>
            <p>Our mission is to empower businesses through smart, scalable, and beautifully designed digital solutions. We aim to bridge the gap between technology and creativity, helping our clients succeed online</p>
        </div>
      </div>

     
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={' CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>  
             <p className='text-gray-600'>We prioritize quality assurance at every stage of our development process to ensure that each website or application we create is stable, secure, and error-free. Rigorous testing and attention to detail help us deliver reliable digital solutions that meet high standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>  
             <p className='text-gray-600'>At the same time, we focus on convenience—making our services easy to use, accessible, and efficient for clients. From smooth communication to user-friendly designs, we aim to create hassle-free experiences that save time and build trust.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Costumer services:</b>  
             <p className='text-gray-600'>We are committed to delivering exceptional customer service by actively listening, responding promptly, and understanding the unique needs of every client.Our team believes that great service goes beyond just delivering a project—it’s about building lasting relationships based on trust and transparency.</p>
          </div>
          
        </div>
        <NewsLetterBox/>
    </div>
    
  )
}

export default About