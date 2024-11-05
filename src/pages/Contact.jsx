import React from 'react'
const Contact = () => {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
         <div>
        <img src="img4.png" alt=" logo" />
      </div>
    </div>
  );
};
export default Contact;

 