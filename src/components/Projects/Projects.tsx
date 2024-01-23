
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'TIENL.DEV FULLSTACK',
      desc: 'TIENL.DEV PORTFOLIO (VERSION 2)',
      year: '2024',
      code: 'https://github.com/flannelboy/tienl.dev_portfolio',
    },
    {
      title: 'REMYUS.SHOP',
      desc: 'AN ONLINE SHOP',
      year: '2023',
      code: 'https://github.com/flannelboy/remyus.shop',
    },
    {
      title: 'TIENL.DEV FRONTEND',
      desc: 'A PERSONAL PORTFOLIO (VERSION 1)',
      year: '2022',
      code: 'https://github.com/flannelboy/tienl.dev',
    },
    {
      title: 'TD POS',
      desc: 'A POINT OF SALE SYSTEM (VERSION 1)',
      year: '2023',
      code: 'https://github.com/flannelboy/PointOfSales',
    },
    {
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
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-primary pb-2">
            Projects
          </h2>
        </div>
      </div>

      <div className="container mx-auto grid gap-10">
        <table className="w-full">
          <tbody>
            <tr className='font-bold text-2xl'>
              <td>Year</td>
              <td>Project</td>
              <td>Link</td>
            </tr>
            {projects.map((project, i) => (
              <tr className='text-lg border-b-[1px] border-primary' key={i}>
                <td>{project.year}</td>
                <td>{project.title}</td>
                <td>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="techstack-icon" />
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
