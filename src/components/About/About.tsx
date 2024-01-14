import React from "react";
import {
  FaReact,
  FaBootstrap,
  FaGithub,
  FaAws,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaFigma,
  FaAngular,
  FaSass,
  FaNodeJs,
  FaPython,
  FaJava,
  FaNpm,
  FaGit,

} from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGooglecloud,

} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";



const About: React.FC = () => {
  return (
    <section className="bg-secondary text-primary px-5 py-32" id="about">
      <div className="container mx-auto  items-center justify-center md:justify-between">
        <div>
          <p className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-primary pb-2">
            About Me
          </p>

          <p className="pb-5 uppercase">
            I am a full-stack developer , specialized in writing and testing production-grade codes that utilized mainstream technologies used in the industry to create robust and high-performance applications.
          </p>

          <p className="pb-5 uppercase">
            i am currently a sophomore computer science student with machine learning and artificial intelligent discipline at the university of texas at arlington.
          </p>



        </div>
        <div>
          <p className="text-4xl font-bold mb-5 border-b-[5px] w-[300px] border-primary pb-2">
            My Tech-Stack
          </p>
          <div className="container lg:flex justify-center py-5 text-primary">
            <div className="m-2">
              <p className="text-2xl">
                Front End:
              </p>
              <FaAngular className="techstack-icon" />
              <FaBootstrap className="techstack-icon" />
              <FaCss3 className="techstack-icon" />
              <FaFigma className="techstack-icon" />
              <FaHtml5 className="techstack-icon" />
              <FaReact className="techstack-icon" />
              <FaSass className="techstack-icon" />
              <FaVuejs className="techstack-icon" />
              <TbBrandNextjs className="techstack-icon" />
              <SiTailwindcss className="techstack-icon" />
              <FaNodeJs className="techstack-icon" />

            </div>
            
            <div className="m-2">
              <p className="text-2xl">
                Back End:
              </p>
              <FaJava className="techstack-icon" />
              <FaNodeJs className="techstack-icon" />
              <FaPython className="techstack-icon" />
              <SiJavascript className="techstack-icon" />
              <SiTypescript className="techstack-icon" />
            </div>
            <div className="m-2">
              <p className="text-2xl">
                Hosting, Deployment, and Databases:
              </p>
              <FaAws className="techstack-icon" />
              <SiGooglecloud className="techstack-icon" />
              <FaNpm className="techstack-icon" />
              <FaGithub className="techstack-icon" />
              <FaGit className="techstack-icon" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
