import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
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
          Latest Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Freelance Web Developer"
              company="Various"
              companyLink=""
              time="04/2023-Present"
              address="Online"
              work="Worked with several projects ranging from mobile apps till websites/web projects. Tech Stack: JavaScript/Typescript, NextJS, NuxtJS, Flutter, Dart, Widget Tester, Ruby on Rails, RSpec"
            />

            <Details
              position="Cross-Platform Developer"
              company="koviko GmbH"
              companyLink="https://www.koviko.de/"
              time="11/2022-04/2023"
              address="August-Bebel-Str. 28, 14482 Potsdam."
              work="Responsible for building a cross-platform app for learning German language using Flutter/Dart and PHP backend with Yii framework. Tech Stack: Flutter, Dart, PHP, Yii, GitLab, CI CD, Hive database, BLoC pattern, Widget Tester"
            />

            <Details
              position="Freelance Web Developer"
              company="Various"
              companyLink=""
              time="04/2022-11/2022"
              address="Online"
              work="Worked with several projects ranging from mobile apps till websites/web projects. Tech Stack: JavaScript/Typescript, NextJS, NuxtJS, Flutter, Dart, Widget Tester, Ruby on Rails, RSpec"
            />

            <Details
              position="Project Assistant"
              company="Friedrich-Schiller-Universität Jena"
              companyLink="https://www.uni-jena.de/"
              time="10/2019-04/2022"
              address="Fürstengraben 1, 07743 Jena."
              work="Increased effectivity of CPU and GPU preparation on silicon chips. Managed project budget for 30 months and increased cost effectivity by 15%. Demonstrated strong writing skills in original correspondence and reports."
            />
          </ul>
        </div>
      </div>
    );
};

export default Experience;
