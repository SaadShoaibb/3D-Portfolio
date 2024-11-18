import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion} from "framer-motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>

    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies That I Utilize</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>
    <div className=" container logo-ticker-wrapper">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,red,transparent)]">
        <div className=" flex logo-ticker flex-none">
          {/* Duplicate the list for a smooth infinite loop */}
          {technologies.concat(technologies).map((technology, index) => (
            <div className="logo-item" key={`${technology.name}-${index}`}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
