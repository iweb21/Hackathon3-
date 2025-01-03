/* eslint-disable react/no-unescaped-entities */
import React from "react";

// Define a reusable CategoryCard component
const CategoryCard = ({ category }: { category: string }) => (
  <div
    className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
    title={`Explore ${category}`}
  >
    <p className="text-center text-lg font-semibold">{category}</p>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out" />
  </div>
);

// Main Feature component
const Feature: React.FC = () => {
  // Categories array
  const categories = [
    "Technology",
    "Artificial Intelligence",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        {/* Title Section */}
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Sumera Imran : Tech Chronicles: Navigating the secrets of Technology
          in Tech Chronicles Blog!
        </h2>

        {/* Subtitle/Description */}
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Sumera Imran, as a software engineer and web developer, specializes in
          designing, developing, and deploying robust web applications. Staying
          updated with the latest technologies and frameworks, delivering
          scalable, high-performance solutions is her forte.
        </p>

        <div className="mx-auto max-w-7xl px-5">
          {/* Categories Heading */}
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>

        {/* Closing Description */}
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Dive into our diverse categories, where you'll discover a wealth of
          knowledge and insight tailored to your interests. Each category
          features carefully curated blogs that explore the latest trends,
          innovative technologies, and essential skills in the world of web
          development and beyond. Whether you're a budding developer, an
          experienced tech enthusiast, or simply curious about the digital
          landscape, there's something here for everyone. Explore the
          categories below and expand your understanding of the dynamic tech
          frontier.
        </p>
      </section>
    </div>
  );
};

export default Feature;
