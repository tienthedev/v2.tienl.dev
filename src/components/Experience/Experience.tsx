import React from "react";



const Experience: React.FC = () => {


  return (
    <div className="bg-primary text-secondary px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-secondary pb-2">
            Experiences
          </h2>
        </div>
      </div>
      
        <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
          <p>COMING SOON, CHECK OUT MY <a href="/#contact" className="underline">SOCIAL</a> OR <a href="/#projects" className="underline">PROJECTS</a> IN THE MEANTIME!</p>

        </div>
    </div>
  );
};

export default Experience;
