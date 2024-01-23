
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
      desc: 'AN ONLINE SHOP',
      year: '2023',
      code: 'https://github.com/flannelboy/remyus.shop',
    },
    {
      img: tienldev,
      title: 'TIENL.DEV',
      desc: 'A PERSONAL PORTFOLIO (VERSION 1)',
      year: '2022',
      code: 'https://github.com/flannelboy/tienl.dev',
    },
    {
      img: tdpos,
      title: 'TD POS',
      desc: 'A POINT OF SALE SYSTEM (VERSION 1)',
      year: '2023',
      code: 'https://github.com/flannelboy/PointOfSales',
    },
    {
      img: invento,
      title: 'INVENTO/TD LIBRARY',
      desc: 'AN INVENTORY MANAGEMENT SYSTEM (VERSION 1, 2)',
      year: '2023',
      code: 'https://github.com/flannelboy/tienl.dev',
    },

  ];

  return (
    <div className="bg-secondary text-primary px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-secondary pb-2">
            Projects
          </h2>
        </div>
      </div>

      <div className="container mx-auto grid gap-10">
        <table className="w-full">
          <tbody>
            <tr className='font-bold'>
              <td>Year</td>
              <td>Project</td>
              <td>Link</td>
            </tr>
            {projects.map((project, i) => (
              <tr key={i}>
                <td>{project.year}</td>
                <td>{project.title}</td>
                <td>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Projects;
