import React from 'react';
import Image from 'next/image';  // Import the Image component
import remyshop from '../../assets/remyshop.png';
import tienldev from '../../assets/tienldev.png';
import tdpos from '../../assets/tdpos.png';
import invento from '../../assets/invento.png';

const Projects: React.FC = () => {
  const projects = [
    {
      img: remyshop,
      title: 'REMYUS.SHOP',
      desc: 'AN ONLINE SHOP. BUILT WITH HTML, CSS, JAVASCRIPT, AND BOOTSTRAP.',
      live: 'https://flannelboy.github.io/remyus.shop/',
      code: 'https://github.com/flannelboy/remyus.shop',
    },
    {
      img: tienldev,
      title: 'TIENL.DEV',
      desc: 'A PERSONAL PORTFOLIO (VERSION 1). BUILT WITH HTML, CSS, JAVASCRIPT, AND BOOTSTRAP.',
      live: 'https://flannelboy.github.io/tienl.dev/',
      code: 'https://github.com/flannelboy/tienl.dev',
    },
    {
      img: tdpos,
      title: 'TD POS',
      desc: 'A POINT OF SALE SYSTEM (VERSION 1). BUILT WITH JAVA, JAVA SWING, REACT NATIVE.',
      live: 'https://github.com/flannelboy/PointOfSales',
      code: 'https://github.com/flannelboy/PointOfSales',
    },
    {
      img: invento,
      title: 'INVENTO/TD LIBRARY',
      desc: 'AN INVENTORY MANAGEMENT SYSTEM (VERSION 1, 2). BUILT WITH JAVA, JAVA SWING.',
      live: 'https://flannelboy.github.io/tienl.dev/',
      code: 'https://github.com/flannelboy/tienl.dev',
    },

  ];

  return (
    <section className="bg-secondary text-primary px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-secondary pb-2">
            Projects
          </h2>

          <p className="pb-5">
            HOVER ON THE IMAGE TO SEE THE LIVE DEMO AND SOURCE CODE.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={500}
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center  px-2 text-secondary">
                  {project.title}
                </p>

                <p className="py-5 text-center  px-2 text-secondary">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 text-primary bg-white hover:bg-secondary mr-5 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 text-primary bg-white hover:bg-secondary font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
