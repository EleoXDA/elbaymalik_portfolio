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
        <h2 className="mt-64 font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Scientific Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

            <Details
              position="Research Assistant as a PhD Student"
              company="Friedrich-Schiller-Universität Jena"
              companyLink="https://www.uni-jena.de/"
              time="10/2019-04/2022"
              address="Fürstengraben 1, 07743 Jena."
              work={[
                "• Masterminded the automation of nanofiber preparation with self-assembly process, slashing preparation times by 50% and consistently producing more intertwined and robust fibers for physical analysis.", 
                "• Protein Analysis Proficiency: Led the identification and use of vital proteins like albumin and fibronectin in nanofiber preparation, setting new benchmarks in biotechnology." 
              ].map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br/>
                </React.Fragment>
              ))}
            />

            <Details
              position="Research Assistant as a Junior Researcher"
              company="Institute of Biophysics"
              companyLink="https://www.uni-jena.de/"
              time="11/2018-10/2019"
              address="Baku, Azerbaijan."
              work={[
                "• Viral Vector Innovations: Led the development of new retroviral vectors, enhancing gene transfer efficacy by 15%, marking an advancement in gene therapy studies.", 
                "• Cancer Cell Line Analysis: Pioneered a robust methodology to assess live/dead statistics in HeLa cells, contributing to an enhanced understanding of cancerous tissue behaviors for creation of anti-cancer agents." 
              ].map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br/>
                </React.Fragment>
              ))}          
            />

            <Details
              position="Research Assistant as an MSc Student"
              company="Middle East Technical University"
              companyLink="https://www.uni-jena.de/"
              time="09/2014-12/2017"
              address="Ankara, Turkey."
              work={[
                "• Innovative Scaffold Design: Spearheaded the development of a novel wet-spun polycaprolactone 3D scaffolds that eased the detection of porosity and mechanical strength.", 
                "• X-ray Spectroscopy Mastery: Successfully identified protein presence in specialized microfibers, by analyzing C N peaks and evaluating bond energy measurements.", 
                "• Biocompatibility Breakthrough: Pioneered the setup for identification of the optimal biocompatibility routine with Saos-2 cell lines that accelerated further research on topic." 
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
