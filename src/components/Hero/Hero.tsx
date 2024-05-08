import React from "react";
import mom from "../../assets/mom.jpg";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-primary px-5 text-secondary py-32 w-full">
      <div className="container-fluid mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, I am <span className="text-accent">Tien</span>,
            <br/>
            Full-Stack Developer,
            <br/>
            Computer Science Student,
            <br/>
            & I am a builder at heart.
            <br/>
          </h1>
          <h1 className="text-xl lg:text-xl">
            Happy Birthday & Happy Mother &apos s Day, Mom!
            <br/>

          </h1>


          <div className="flex py-5 text-secondary">
            <a
                href="https://github.com/flannelboy"
                className="pr-4 inline-block  hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineGithub size={40}/>{" "}
            </a>

            <a
                href="https://www.linkedin.com/in/tiendungdle/"
                className="pr-4 inline-block  hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineLinkedin size={40}/>{" "}
            </a>
          </div>

          <a
              href="/#projects"
              className=" btn bg-secondary  border-2 border-white text-primary px-6 py-3 hover:bg-transparent hover:text-secondary"
          >
            BROWSE PROJECTS
          </a>
        </div>
        <div className="justify-items-center">
          <Image
              src={mom}
              width={500}
              height={500}
              alt="Picture of the Mom"
              className="rounded-full "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
