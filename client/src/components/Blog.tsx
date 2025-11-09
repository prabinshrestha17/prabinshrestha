"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import blogData from "../data/blog.json";
import { motion, Variants } from "framer-motion"; // Import motion and Variants

interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  url: string;
}

interface BlogCardProps {
  post: Post;
  variants?: Variants; // Add variants prop for motion
}

// Update BlogCard to use motion.a
const BlogCard: React.FC<BlogCardProps> = ({ post, variants }) => {
  return (
    <motion.a
      variants={variants} // Apply item variants here
      href={post.url}
      className="group flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      <div className="overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          {post.title}
        </h3>
        <p className="text-neutral-400 text-sm flex-grow">{post.excerpt}</p>
        <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </motion.a>
  );
};

// Framer Motion Variants
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Delay before the first child starts
      staggerChildren: 0.1, // Delay between each child item
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(blogData);
  }, []);

  return (
    <section id="blog" className="py-24 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 // Apply motion to the title
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4"
        >
          From My Blog
        </motion.h2>
        <motion.p // Apply motion to the subtitle
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-neutral-400 text-center max-w-2xl mx-auto mt-4 mb-16"
        >
          I occasionally write about web development, new technologies, and my
          personal coding journey. Here are some of my latest posts.
        </motion.p>

        <motion.div // Apply motion to the grid container
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map(post => (
            <BlogCard key={post.id} post={post} variants={itemVariants} /> // Pass item variants
          ))}
        </motion.div>

        <motion.div // Apply motion to the 'Visit My Blog' link container
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
          >
            Visit My Blog
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
