import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-black text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5 uppercase">
          I'm a <span className="underline">full-stack developer</span> with three years of experience crafting web and mobile applications. 
          I specialize writing and testing <span className="underline">production-grade codes</span> that utilized mainstream technologies used in the industry. 
          I use <span className="underline">agile methodology</span> for swift adaptation to changes, ensuring timely delivery of deployable, high-quality software.
          </p>

          
          <p className="pb-5 uppercase">
            my choice of tech stack & languages: 
            <br />
            <ul className="list-disc list-inside">
              <li><span className="underline">backend</span>: nodejs, nextjs, java, c, c++, c#, python</li>
              <li><span className="underline">cloud</span>: aws, google cloud, mongodb</li>
              <li><span className="underline">frontend</span>: react, typescript, angular, html, css, javascript, sass, bootstrap, tailwindcss, react-native, flutter</li>
              <li><span className="underline">hosting & deployment</span>: vercel, github</li>
            </ul>
          </p>
         
          <p className="pb-5 uppercase">
            i'm currently a second-year <span className="underline">computer science student</span> with discipline in <span className="underline">machine learning and artificial intelligent</span> at the university of texas at arlington.
          </p>
          <p className="pb-5 uppercase">
            you can find me building cars, motorcycles, computers and more software projects during my free time! 
            beside that, i enjoy learning about new technologies and helping people with their project/work.
          </p>
        </div>


      </div>
    </section>
  );
};

export default About;
