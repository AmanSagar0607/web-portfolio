// import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <div>
       <h2 className={`${styles.sectionHeadText} mt-15 mb-20 flex flex-col`}>Skills.</h2>
   
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");