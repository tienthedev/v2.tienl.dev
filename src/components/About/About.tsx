import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Tien Le. I am a
            Full-Stack Developer. I build beautiful websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3, and many more.
          </p>

          <p>In the backend, I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time, I build cars, motorcycles, computers and circuit.
          </p>
        </div>

      
      </div>
    </section>
  );
};

export default About;
