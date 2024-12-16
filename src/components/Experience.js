import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  techstack,
}) => {
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
        <h3 className="mb-3 capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="mb-3 capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="mb-3 font-medium w-full md:text-sm"> {work}</p>
        <p className="mb-3 font-bold w-full md:text-sm"> {techstack}</p>
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
            position="Frontend Developer"
            company="stagedates GmbH"
            companyLink="https://www.stagedates.com/"
            time="10/2023 - Present"
            address="Remote, Germany"
            work={[
              "• Designed and implemented a reusable Vue-Quasar component library, reducing development time for features.",
              "• Reengineered critical workflows, including authorization and a revamped guest checkout flow, increasing signup rates and boosting sales conversions by 25%.",
              "• Optimized Vue-Router and added responsive design, improving page load speed and securing role-based routes.",
              "• Leveraged state management (Pinia) for admin and user workflows, ensuring seamless page transitions without data loss.",
              "• Mentored 2 junior developers, enhancing their technical skills and reducing code review turnaround times.",
              "• Utilized 20 unit tests (Vitest) for release workflows and 32 robust integration tests (Cypress).",
              "• Developed messaging functionality for promoters to contact ticket owners, reducing customer support inquiries.",
              "• Improved repository structure and optimized Git workflows with caching, reducing deployment time by 30%.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Vue.js, Quasar, JavaScript, Pinia, RESTful APIs, Vitest, Cypress, Git, CI/CD.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Volunteer Frontend Developer"
            company="Digital Dignity - Am I in Porn?"
            companyLink="https://www.amiinporn.org/"
            time="04/2023 - Present"
            address="Potsdam, Germany"
            work={[
              "• Created a responsive web app with NextJS, aiding in online safety and usability on both mobile and desktop.",
              "• Optimized frontend to accept live images securely while preventing misuse in image submission workflows.",
              "• Integrated real-time face detection services with backend systems, enhancing accurate face identification.",
              "• Collaborated closely with UI designers and backend engineers to deliver a secure and user-friendly platform.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: React, Next.js, Node.js, Bootstrap, GitHub, CI/CD.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Junior Developer"
            company="koviko GmbH"
            companyLink="https://www.koviko.de/"
            time="11/2022 - 04/2023"
            address="Potsdam, Germany"
            work={[
              "• Added a statistics page to help managers track how workers were progressing in language proficiency in the application.",
              "• Built a notification system to inform users about new app updates, increasing engagement with new features.",
              "• Designed 14 Angular components based on Figma designs, creating maintainable code for future redesigns.",
              "• Updated the Jasmine test workflows and implemented new unit tests with Jest for each added feature in the repo.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Angular, JavaScript, GitLab, CI/CD.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Web Developer"
            company="Friedrich-Schiller-Universität Jena"
            companyLink="https://www.uni-jena.de/"
            time="10/2019 - 04/2022"
            address="Jena, Germany"
            work={[
              "• Designed and developed interactive front-end components for university web applications using HTML, CSS, and JavaScript, ensuring accessibility for diverse user groups.",
              "• Migrated static web pages to dynamic content, reducing maintenance overhead by 30%.",
              "• Developed a student portal for managing course enrollments and grades, integrating with a MySQL database.",
              "• Improved website performance by optimizing images and adhering to SEO and responsive design best practices.",
              "• Created reusable HTML/CSS templates for various university departments, standardizing design and reducing duplication of effort.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: HTML, CSS, JavaScript, MySQL, Git, Bootstrap, RESTful APIs.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
