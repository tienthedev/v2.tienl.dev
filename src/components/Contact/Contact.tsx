import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container-fluid bg-[#001b33]">
      <div
        id="contact"
        className="container d-flex flex-wrap justify-content-between align-items-center custom-contact"
      >
        <p className="text-4xl">LET&apos;S CONNECT!</p>
        <ul className="list-none">
          <li className="text-2xl">
            <a
              href="https://www.linkedin.com/in/tiendungdle/"
              className="text-decoration-none text-light custom-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li className="text-2xl">
            <a
              href="https://github.com/flannelboy"
              className="text-decoration-none text-light custom-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li className="text-2xl">
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
    </div>
  );
};

export default Contact;
