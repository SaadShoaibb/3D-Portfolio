import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';
import BallCanvas from './canvas/Ball';
import { useWebGLContext } from './WebGLContextProvider';

const Hero = () => {
  const { activeCanvas, setActiveCanvas } = useWebGLContext();

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-red-700'/>
          <div className='w-1 sm:h-80 h-40 red-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-red-600'>Saad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern dynamic web applications, <br className='sm:block hidden'/>
            ranging from front-end to full stack,<br className='sm:block hidden'/>
            from minimalistic to captivating 3D visuals.
          </p>
        </div>
      </div>
      <div className='absolute top-0 left-0 p-4'>
        <button onClick={() => setActiveCanvas('Computers')}>Show Computers</button>
        <button onClick={() => setActiveCanvas('Ball')}>Show Ball</button>
      </div>
      {activeCanvas === 'Computers' && <ComputersCanvas />}
      {activeCanvas === 'Ball' && <BallCanvas icon='/assets/tech' />}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
