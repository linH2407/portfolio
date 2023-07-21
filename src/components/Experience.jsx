/* eslint-disable no-unused-vars */
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>fdhdg</VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
