import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
// import Tilt from 'react-tilt' ;

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled computer science final year student at Birla Institute of
        technology Mesra. I'm MERN developer with problem solving skill. I
        usually solve codeforces, leetcode, gfg etc. I'm quick learner and
        collaborate closely with others. I also have intrest in devops, app
        development, AI and ML.
      </motion.p>

      
    </>
  );
};

export default About;
