import React from 'react';

const Contact: React.FC = () => {
  return (
    
    <section className="container-fluid bg-primary text-secondary">
      <div id="contact" className="container mx-auto grid md:grid-cols-2 items-center md:justify-between px-10  py-10">
        <p className="text-6xl ">LET&apos;S CONNECT!</p>
        <ul className="list-none ">
          <li className="text-4xl">
            <a
              href="https://www.linkedin.com/in/tiendungdle/"
              className="text-decoration-none custom-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li className="text-4xl">
            <a
              href="https://github.com/flannelboy"
              className="text-decoration-none  custom-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li className="text-4xl">
            <a
              href="mailto:hello@tienl.dev"
              className="text-decoration-none text-light custom-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              HELLO@TIENL.DEV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
