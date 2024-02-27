import {motion} from "framer-motion";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import { styles } from "../styles";
import { useState } from "react";
import { useEffect } from "react";

const Section = (props) => {
    const {children, mobileTop} = props;

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 1000);
      }

      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const justifyClass = isMobile 
    ? "justify-start mt-8"
    : "justify-center"; 
    return (<motion.section
      className={`
      h-screen w-screen p-8 max-w-screen-2xl mx-auto
      flex flex-col items-start  ${justifyClass}
      `}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        {children}
      </motion.section>)
}

export const Interface = (props) => {
    const {section, nameSection} = props;
   return (
    <>
    <div className="flex flex-col items-center w-screen">
    <About setSection = {section}/>
    <Work />
    <Projects />
    <div>
    <Contact />
    </div>
    </div>
    </>
   );
}

const About = (props) => {
    const {setSection} = props;
    return (
      <Section mobileTop>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hey, I'm
          <br />
          <span className='text-[#915EFF]'>Rohan</span>
        </h1>
        <motion.p
          className={`${styles.heroSubText} mt-2 text-white-100`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          I'm an undergraduate student,
          <br></br>
          majoring in AI and Computer Science.
        </motion.p>
        
      </Section>
    );
  };

const ContactSection = () => {

        return (
          <Section>
            <h2 className="text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
              <form>
                <label for="name" className="font-medium text-gray-900 block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <label
                  for="email"
                  className="font-medium text-gray-900 block mb-1 mt-8"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <label
                  for="email"
                  className="font-medium text-gray-900 block mb-1 mt-8"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
                  Submit
                </button>
              </form>
            </div>
          </Section>
        );
      };