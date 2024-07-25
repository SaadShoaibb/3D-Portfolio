import React from 'react';
import SingleCanvas from './canvas/SingleCanvas';
import Ball from './canvas/Ball';
import { technologies } from '../constants';
import StarsCanvas from './canvas/Stars'; 
import {motion} from 'framer-motion';
import{fadeIn, textVariant} from '../utils/motion';
import{styles} from '../styles';
import { SectionWrapper } from '../hoc';


const Tech = () => {
  
return(
  <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>My skills</p>
  <h2 className= {styles.sectionHeadText}>Tech Stack.</h2>
 <div className="relative flex flex-wrap flex-row justify-center gap-10">
    <SingleCanvas>
      {technologies.map((technology) => (
        <Ball key={technology.name} imgUrl={technology.icon} />
      ))}
    </SingleCanvas>
  </div>
  </motion.div>

)

}


export default SectionWrapper (Tech,"")