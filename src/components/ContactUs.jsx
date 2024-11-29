import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="container max-w-xl bg-gray-900 rounded-lg p-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          If you have any questions, feedback, or need support, feel free to reach out. We're here to help!
        </p>
        <div className="text-gray-300 text-lg mb-4">
          📧 Email:{" "}
          <a
            href="mailto:bjoseph1987@conestogac.ca"
            className="text-cyan-400 hover:text-white"
          >
            bjoseph1987@conestogac.ca
          </a>
        </div>
        <div className="text-gray-300 text-lg">
          📞 Phone: +1 (519) 590-9788
        </div>
        <footer className="mt-6 text-gray-400 text-sm">
          © 2024 HelloWorld Team. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
