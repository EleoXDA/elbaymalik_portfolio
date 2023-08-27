import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Web Development Bootcamp Certification"
            time="2022"
            place="Le Wagon Web Development Bootcamp"
            info={[
              "• 9-week instensive full-time Coding Bootcamp that focused on Ruby on Rails, HTML, CSS, JavaScript, React, Redux, SQL, Git, GitHub, Heroku, and pair programming.", 
              "• Two weeks of individual work on a final project, which was a full-stack web application built with Ruby on Rails, HTML, CSS, JavaScript, and PostgreSQL.",
              "• Final project included starting from sketches, wireframes (Figma), and user stories to a deployed web application with a database and a user interface."
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br/>
              </React.Fragment>
            ))}
          />
          <Details
            type="Master of Science in Micro and Nanotechnology"
            time="2014-2017"
            place="Middle East Technical University (METU)"
            info={[
              "• Development of 3D wet-spun PCL scaffolds for bone tissue engineering", 
              "• Addition of hydroxyapatite to improve mechanical properties and bioactivity",
              "• Surface modification with AAc and gelatin to improve cell adhesion and proliferation",
              "• Gelatin microvesicles were added for controlled release of antibacterial agents",
              "• Characterization of scaffolds with SEM, XPS, and mechanical tester",
              "• Cell culture and cell viability tests with Saos-2 osteosarcoma cell liness",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br/>
              </React.Fragment>
            ))}
          />
          <Details
            type="Bachelor of Science in Biology"
            time="2008-2013"
            place="Middle East Technical University (METU)"
            info={[
              "• Basics of Scientific Research and Presentation", 
              "• Lab internship in the field of Molecular Biology",
              "• Biomaterials and Tissue Engineering courses for Master studies",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br/>
              </React.Fragment>
            ))}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
