import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML Block of Web Development",
      description:
        "HTML is the standard markup language for creating web pages. It defines the structure of a document, including the document's title, headings, paragraphs, images, links, and more. HTML is used to create web content, including text, images, videos, and interactive elements.",
        date: "2024-11-30",
        image: "https://cdn.prod.website-files.com/60f8ffe4d3ddfa64654d6667/640ac114faba544f3d0523a5_web-design-%26-development-blog-crtv.webp",
    },
    {
      id: "2",
      title: "CSS for Modern UI Design",
      description: "CSS for Modern UI Design refers to the use of advanced styling techniques and frameworks to create clean, responsive, and visually appealing user interfaces. It emphasizes modern practices like Flexbox, Grid, animations, and design tokens to ensure accessibility, scalability, and a seamless user experience across devices..",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJtBSAmE5h1hTyeTolV2lLYBx4kN3F8OOIw&s",
    },
    {
      id: "3",
      title: "JavaScript Essentials",
      description: "JavaScript Essentials refers to the foundational concepts and features of JavaScript, including variables, data types, functions, events, and DOM manipulation. It equips developers with the core knowledge to build dynamic, interactive web applications.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeZLUWhZ9uTZREJGGdOjqnGIYBObLsKtPig&s",
    },
    {
      id: "4",
      title: "React Fundamentals",
      description: "React Fundamentals covers the core principles of React, including component-based architecture, state management, and the use of JSX for building dynamic user interfaces. It focuses on creating reusable components and managing application data efficiently.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6aU5e2McdkTmxq48bqSyd6oMM4KM1bxcxw&s",
    },
    {
      id: "5",
      title: "Node.js for Backend Development",
      description: "Node.js for Backend Development involves using Node.js, a runtime environment, to build scalable, efficient server-side applications. It leverages JavaScript for handling server logic, APIs, and real-time communication.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L4SsGL-SwH_r0Jy9r0EKeQ1FPkYvbuu6mw&s",
    },
    {
      id: "6",
      title: "Express.js Essentials",
      description: "Express.js Essentials focuses on the core features of Express, a minimalist Node.js framework, for building fast and scalable web applications. It simplifies routing, middleware integration, and API development.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnWRg-PDtcDL-lbzP8fdaFNdRbS6YJsI37Q&s",
    },
    {
      id: "7",
      title: "MongoDB Basics",
      description: "MongoDB Basics covers the foundational concepts of MongoDB, a NoSQL database, including data storage in JSON-like documents, collections, and CRUD operations. It is designed for flexible and scalable data management.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5pgyiv3swvD3lzJroyK8u5CSQmmGxoBjkA&s",
    },
    {
      id: "8",
      title: "Responsive Web Design",
      description: "Responsive Web Design is an approach to web development that ensures websites adapt seamlessly to different screen sizes and devices. It utilizes flexible layouts, media queries, and scalable elements for optimal user experiences.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7I6sPz4j89K22dGo6quE9D1VYZ2rGLbZMg&s",
    },
    {
      id: "9",
      title: "Bootstrap for Quick Prototyping",
      description: "Bootstrap for Quick Prototyping refers to using the Bootstrap framework to rapidly create responsive and visually appealing web designs. It offers pre-styled components, grid systems, and utilities for efficient development.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kJNSb9c-PfiF4wKz1u5yjsmKfo9Z0Svz4Q&s",
    },
    {
      id: "10",
      title: "TypeScript: JavaScript Reimagined",
      description: "TypeScript: JavaScript Reimagined introduces TypeScript, a superset of JavaScript that adds static typing and advanced features. It enhances code reliability, maintainability, and scalability for modern application development.",
      date: "2024-11-30",
      image: "https://www.bestremoteteam.com/wp-content/uploads/2023/05/comparison-of-typescript-and-javascript-frameworks-in-2023.jpg",
    },
    {
      id: "11",
      title: "Version Control with Git",
      description: "Version Control with Git involves managing and tracking changes to code using Git, a distributed version control system. It enables collaboration, history tracking, and efficient branching for software development.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9pF2z69H7ZrQLQBj6-Ryc9eaGPfF8FSUcQ&s",
    },
    {
      id: "12",
      title: "Next.js for Server-Side Rendering",
      description: "Next.js for Server-Side Rendering (SSR) allows React pages to be pre-rendered on the server for each request, improving SEO and initial page load time. Using `getServerSideProps`, data is fetched on the server before sending the fully rendered HTML to the client.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG00Pa28W_mK-RcSE2KPqbA1NKaOm9uZwvOg&s",
    },
    {
      id: "13",
      title: "API Development Best Practices",
      description: "API development best practices include designing clear, consistent endpoints, using proper HTTP methods (GET, POST, PUT, DELETE), and ensuring robust error handling and validation. Additionally, securing APIs with authentication and authorization, along with documenting them for easy integration, is crucial for maintainability and scalability.",
      date: "2024-11-30",
      image: "https://aglowiditsolutions.com/wp-content/uploads/2021/07/Best-practices-for-RESTful-API-Development.png",
    },
    {
      id: "14",
      title: "GraphQL for Modern APIs",
      description: "GraphQL is a query language for APIs that allows clients to request exactly the data they need, improving efficiency and flexibility. It enables real-time data fetching, reduces over-fetching or under-fetching, and provides a single endpoint for accessing multiple resources.",
      date: "2024-11-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6zOXZhH8Da-h-h1wGtZsK6JkxCqxuAseqQ&s",
    },
    {
      id: "15",
      title: "Building Progressive Web Apps",
      description: "Building Progressive Web Apps (PWAs) involves creating web applications that offer a native app-like experience, including offline capabilities, fast loading, and push notifications. Key techniques include using service workers for caching, making the app responsive, and ensuring it is installable on devices with a web app manifest.",
      date: "2024-11-30",
      image: "https://www.rlogical.com/wp-content/uploads/2024/09/top-progressive-web-app-frameworks-for-build-web-apps-1200x900.webp",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>

);
};




