import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import saad from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full red-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450 }}
          className='red-color rounded-[20px] p-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mb-6'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className='flex flex-col md:flex-row items-center'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-secondary text-[17px] max-w-3xl leading-[30px] mb-4 md:mb-0'>
          I'm an innovative and skilled software developer with
          high-end experience in Javascript & Python.
          I specialize in frameworks such as React, NodeJs,
          ExpressJs and ThreeJs. I have a knack for
          full-stack development as well will skills in databases
          such as MongoDB and MS SQL.
          With my top-notch problem-solving skills, I am able to
          overcome many hurdles and put into effect my collaborative
          skills in order to produce the most efficient, user-friendly
          and scalable products for my clients.
          Hire Me to bring your Unique ideas into reality!
        </motion.p>
        <motion.div variants={zoomIn(0.5, 0.75)} whileHover={{ scale: 1.15 }} className='md:ml-4'>
          <img src={saad} alt='Saad' className='w-full h-auto md:w-auto md:h-auto' />
        </motion.div>
      </div>
      <div className='mt-[-180px] flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
