import React from "react";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Hero: React.FC = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-1 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, I am <span className="text-accent">T</span>ien,
            <br />
            Full-Stack Developer,
            <br />
            Computer Science Student,
            <br />
            & I am a builder at heart.
          </h1>


          <div className="flex py-5 ">
            <a
              href="https://github.com/flannelboy"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            
            <a
              href="https://www.facebook.com"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            Browse Projects
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
