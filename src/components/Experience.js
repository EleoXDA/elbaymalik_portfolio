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
            className="text-primary dark:text-primaryDark"
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
        Experience
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
            company="ecostag GmbH (stagedates)"
            companyLink="https://www.stagedates.com/"
            time="10/2023 - Present"
            address="Remote, Germany"
            work={[
              "• Designed and implemented a reusable Vue-Quasar component library, reducing development time for features.",
              "• Reengineered critical workflows, including authorization & guest checkout, boosting sales conversions by 25%.",
              "• Optimized Vue-Router & added responsive design, improving page load speed and securing role-based routes.",
              "• Leveraged state management (Pinia) for admin and user workflows, ensuring seamless page transitions (e.g., agent-side checkout, authentication) with 0 data loss incidents reported thus far.",
              "• Mentored 2 junior frontend developers, improving their technical skills and reducing code review turnaround.",
              "• Implemented robust testing frameworks, leveraging Vitest and Cypress to ensure code quality and reliability.",
              "• Improved repository structure and Git workflows with caching, reducing deployment time by 30%.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Vue (Vue.js or VueJS), Quasar, JavaScript, Pinia, RESTful APIs, Git, CI/CD.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Frontend Developer (Volunteer)"
            company="Digital Dignity - Am I in Porn?"
            companyLink="https://www.amiinporn.org/"
            time="04/2023 - 12/2024"
            address="Potsdam, Germany"
            work={[
              "• Created a responsive web app with NextJS, aiding in online safety, usable both on mobile and desktop.",
              "• Optimized frontend to accept live images (1 per min) securely, whilst preventing misuse in image submission.",
              "• Cooperated with backend team to integrate real-time face detection services, aiding accurate face identification.",
              "• Worked closely with UI designers and backend engineers to deliver a secure and user-friendly platform.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: React, Next.js (NextJS), NodeJS, Bootstrap, GitHub CI/CD Pipeline.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Frontend Developer"
            company="koviko GmbH"
            companyLink="https://www.koviko.de/"
            time="10/2022 - 10/2023"
            address="Potsdam, Germany"
            work={[
              "• Added a statistics page to help managers track how workers were progressing in language in the application.",
              "• Built a notification system to inform users about new app updates, increasing engagement with new features.",
              "• Designed 14 Angular components based on Figma designs, making easy-to-manage code for future redesigns.",
              "• Updated the Jasmine test workflows and adapted new unit tests with Jest for each added feature in the repo.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Angular, JavaScript, Gitlab, CI/CD Pipeline.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Frontend Developer"
            company="Friedrich-Schiller-Universität Jena"
            companyLink="https://www.uni-jena.de/"
            time="10/2019 - 04/2022"
            address="Jena, Germany"
            work={[
              "• Migrated legacy Vue 2 codebase to Vue 3, for better modularity and maintainability (Composition API).",
              "• Designed and implemented reusable Vue components for interactive dashboards and academic portals.",
              "• Integrated backend APIs using Axios, employing Vuex for managing application state.",
              "• Optimized website performance by reducing JavaScript bundle size by 40% through tree-shaking techniques.",
              "• Improved accessibility by achieving WCAG compliance through ARIA attributes and semantic HTML.",
              "• Led efforts to implement Cypress-based integration tests, ensuring robust end-to-end functionality.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Vue (Vue.js or VueJS), Vuex, Axios, Cypress, JavaScript, SCSS, HTML, Tailwind CSS, RESTful APIs.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Web Developer (Frontend)"
            company="RecruIT"
            companyLink="#"
            time="04/2019 - 09/2019"
            address="Remote, Germany"
            work={[
              "• Developed and maintained frontend components using Vue 2, implementing Vuex for state management.",
              "• Built an admin dashboard for analytics, incorporating data visualizations with Chart.js and Vue Router.",
              "• Enhanced testing workflows with Jest and added unit tests to improve codebase reliability.",
              "• Standardized project structures and reusable components, reducing development time for new features.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Vue (Vue.js or VueJS), Vuex, Jest, SCSS, HTML, RESTful APIs.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Junior Web Developer (Frontend)"
            company="RecruIT"
            companyLink="#"
            time="04/2018 - 03/2019"
            address="Remote, Germany"
            work={[
              "• Built dynamic web applications using Vue JavaScript framework (Vue 2) and integrated RESTful APIs.",
              "• Optimized website performance, reducing loading time by 35% through image compression and lazy loading.",
              "• Implemented responsive designs, ensuring compatibility across mobile, tablet, and desktop devices.",
              "• Worked closely with clients to gather requirements and deliver solutions tailored to their needs.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={[
              "• Tech stack: Vue (Vue.js or VueJS), JavaScript, RESTful APIs, SCSS, HTML, Axios.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
          <Details
            position="Web Developer (Intern)"
            company="RecruIT"
            companyLink="#"
            time="01/2018 - 03/2018"
            address="Remote, Germany"
            work={[
              "• Assisted in the development of interactive frontend components using HTML, CSS, and JavaScript.",
              "• Created reusable UI templates to standardize design across internal tools and reduce development time.",
            ].map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            techstack={["• Tech stack: HTML, CSS, JavaScript (ES6)."].map(
              (line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              )
            )}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
