"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import AuthoreCard from "@/components/AuthoreCard";
import Image from "next/image";

// Define the Post type with the optional image property
type Post = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

// Asynchronous PostProps type
type PostProps = {
  params: Promise<{
    id: string;
  }>;
};

// Array of posts with no date property
const posts: Post[] = [
  {
    id: "1",
    title: "HTML Block of Web Development",
    description:
      "HTML is the standard markup language for creating web pages. It defines the structure of a document, including the document's title, headings, paragraphs, images, links, and more. HTML is used to create web content, including text, images, videos, and interactive elements.",
    image:
      "https://cdn.prod.website-files.com/60f8ffe4d3ddfa64654d6667/640ac114faba544f3d0523a5_web-design-%26-development-blog-crtv.webp",
  },
  // ... other posts
];

export default async function Post({ params }: PostProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  // If post is not found, return a "not found" message
  if (!post) {
    return (
      <section className="text-center mt-10">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
      </section>
    );
  }

  // Function to render paragraphs with line breaks
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {/* Conditionally render image if exists */}
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          height={200}
          width={300}
        />
      )}

      {/* Render the post description paragraphs */}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      {/* Comment Section, Author Card, and Footer */}
      <CommentSection postId={post.id} />
      <AuthoreCard />
      <Footer />
    </div>
  );
}
