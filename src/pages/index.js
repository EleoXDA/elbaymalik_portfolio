import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from 'react';
import { ContactForm } from "@/components/contactForm";



export default function Home() {
  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <Head>
        <title>Elbay Malik Portfolio</title>
        <meta
          name="description"
          content="Explore Elbay's Next developer portfolio."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Elbay Malik"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="From Concept to Creation: Crafting with Code and Design."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              As a skilled fullstack developer, I am dedicated to turning ideas into innovative web or mobile applications. Explore my latest projects, showcasing my expertise in fullstack web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1oJ9H7wGFC-Ix0OQwowjJqNOquIBNtO_V/view?usp=sharing"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                              md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <button
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                  onClick={() => setShowModal(true)}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt=""
          />
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
              <ContactForm closeModal={() => setShowModal(false)} />
          </div>
        )}
      </article>
    </>
  );
}
