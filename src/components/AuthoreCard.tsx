
import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="/images/IMG-20240816-WA0017.jpg" // Use public/static folder for assets
          alt="Author"
        />
        <div>
          <h3 className="text-xl font-bold">Sumera Imran</h3>
          <p className="text-slate-500">Software Engineer | Web Developer</p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        I am a software engineer with expertise in web development. I specialize
        in creating dynamic and user-friendly web applications.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}