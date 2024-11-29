import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">HelloWorld Team</h1>
        <img
          src="./about-us.png"
          alt="HelloWorld Team"
          className="rounded-lg shadow-lg mb-6"
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/kishan-kumar-das/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-lg"
          >
            Kishan Kumar Das
          </a>
          <a
            href="https://www.linkedin.com/in/istiyak-tailor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-lg"
          >
            Istiyak Tailor
          </a>
          <a
            href="https://www.linkedin.com/in/bibintomj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-lg"
          >
            Bibin Tom Joseph
          </a>
        </div>
      </div>
      <footer className="mt-10 text-gray-400 text-sm">
        © 2024 HelloWorld Team. All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;
