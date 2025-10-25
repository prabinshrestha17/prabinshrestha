import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import blogData from "../data/blog.json"; // already imported at the top

interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  url: string;
}

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <a
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
    </a>
  );
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(blogData);
  }, []);

  return (
    <section id="blog" className="py-24 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
          From My Blog
        </h2>
        <p className="text-lg text-neutral-400 text-center max-w-2xl mx-auto mt-4 mb-16">
          I occasionally write about web development, new technologies, and my
          personal coding journey. Here are some of my latest posts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
          >
            Visit My Blog
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
