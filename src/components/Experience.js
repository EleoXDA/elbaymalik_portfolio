import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work, techstack }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
        <p className="font-bold w-full md:text-sm"> {techstack}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Relevant Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              position="Junior Developer"
              company="koviko GmbH"
              companyLink="https://www.koviko.de/"
              time="11/2022-04/2023"
              address="August-Bebel-Str. 28, 14482 Potsdam."
              work={[
                "• Implemented a usage statistic tracking system, which empowered over 10 hospitals to monitor and enhance their staff's language proficiency progression in real-time.", 
                "• Integrated an update notification page, ensuring users always experience the latest app and assets with BLoC pattern. Reports decreased by 40% due to usage of latest app, which in turn enhanced user experience.",
                "• Proactively identified and rectified 30+ app bugs within 6 months, elevating overall user ratings by 15%.",
                "• Designed and integrated a user-focused greeting page, which contained signing up/in and accepting terms and conditions before app access by using Hive database.",
              ].map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br/>
                </React.Fragment>
              ))}
              techstack={[
                "• Tech stack: Flutter, Dart, PHP. Hive DB, BLoC, Gitlab, CI-CD" 
              ].map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br/>
                </React.Fragment>
              ))}
            />

            <Details
              position="Volunteer Frontend Developer"
              company="Digital Dignity - Am I in Porn?"
              companyLink="https://www.amiinporn.org/"
              time="04/2023-present"
              address="August-Bebel-Str. 28, 14482 Potsdam."
              work={[
                "• Development of new Frontend: With Vue.JS and Nuxt.JS, a new frontend is being prepared for 'Am I in Porn' website that integrates face detection backend with surveillance.",
              ].map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br/>
                </React.Fragment>
              ))}
              techstack={[
                "• Tech stack: Next.JS, React, Node.JS, Tailwind.CSS, GitHub, CI-CD" 
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

export default Experience;
