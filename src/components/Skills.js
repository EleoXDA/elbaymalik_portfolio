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
      className="cursor-pointer w-max origin-center absolute font-bold 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       4xl:text-2xl 4xl:px-9 4xl:py-11 3xl:text-2xl 3xl:py-8 3xl:px-10 
       2xl:text-2xl 2xl:py-6 2xl:px-8 xl:py-4 xl:px-6 lg:py-3 lg:px-5 
       md:text-sm md:py-2 md:px-4 xs:py-0.5 xs:px-1
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
      "
    >
   
        <motion.div whileHover={{scale:0}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-0 shadow-dark
        dark:bg-light dark:text-dark lg:p-1 md:p-1 xs:text-xs xs:p-0
        ">
        
      </motion.div>

      <Skill name="HTML" x="30vw" y="2vw" />
      <Skill name="CSS" x="40vw" y="-5vw" />
      <Skill name="JavaScript" x="8vw" y="-1vw" />
      <Skill name="ReactJS" x="6vw" y="-12vw" />
      <Skill name="NextJS" x="38vw" y="-12.5vw" />
      <Skill name="NuxtJS" x="23vw" y="-8vw" />
      <Skill name="VueJS" x="33vw" y="12vw" />
      <Skill name="Typescript" x="13vw" y="10vw" />
      <Skill name="Graphql" x="-11vw" y="3.5vw" />
      <Skill name="Grafbase" x="-34vw" y="-20vw" />
      <Skill name="Tailwind.CSS" x="20vw" y="-20vw" />
      <Skill name="Sass" x="0vw" y="-20vw" />
      <Skill name="SCSS" x="39vw" y="-20vw" />
      <Skill name="PHP" x="-14vw" y="-4vw" />
      <Skill name="Dart" x="-36vw" y="12vw" />
      <Skill name="Figma" x="-15vw" y="-20vw" />
      <Skill name="Adobe XD" x="-34vw" y="-10vw" />
      <Skill name="Flutter" x="-17vw" y="12vw" />
      <Skill name="Ruby on Rails" x="-32vw" y="0vw" />
      <Skill name="Postman" x="-12vw" y="-12vw" />    
    </div></>
  );
};

export default Skills;
