import { motion } from "framer-motion";
import React, { useRef } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
<>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2> 
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
        <motion.div whileHover={{scale:0}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-0 shadow-dark
        dark:bg-light dark:text-dark lg:p-0 md:p-0 xs:text-xs xs:p-0
        ">
        
      </motion.div>

        <Skill name="HTML" x="-16vw" y="3.5vw" />
        <Skill name="CSS" x="-3vw" y="-12vw" />
        <Skill name="JavaScript" x="25vw" y="3vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="0vw" y="2vw" />
        <Skill name="NuxtJS" x="15vw" y="-12vw" />
        <Skill name="VueJS" x="-35vw" y="-5vw" />
        <Skill name="Typescript" x="32vw" y="-5vw" />
        <Skill name="Graphql" x="0vw" y="-20vw" />
        <Skill name="Grafbase" x="32vw" y="-12.5vw" />
        <Skill name="Tailwind CSS" x="-28vw" y="-20vw" />
        <Skill name="Sass" x="-18vw" y="-12vw" />
        <Skill name="SCSS" x="17vw" y="11vw" />
        <Skill name="PHP" x="33vw" y="12vw" />
        <Skill name="Ruby on Rails" x="-30vw" y="12vw" />
        <Skill name="Figma" x="-33vw" y="3vw" />
        <Skill name="Adobe XD" x="-15vw" y="-5vw" />
        <Skill name="Flutter" x="10vw" y="-5vw" />
        <Skill name="Dart" x="-31vw" y="-12.5vw" />
        <Skill name="Postman" x="25vw" y="-20vw" />        
    </div></>
  );
};

export default Skills;
