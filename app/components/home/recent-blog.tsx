"use client";

import React, { useState, useEffect } from 'react';
import ArticleCard from '../articles/article-card';

type Blog = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  featuredImage: string;
};

function RecentBlog() {
  const [blog, setBlog] = useState<Blog[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/articles');
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil((blog?.length || 0) / 6)) {
      setPage(newPage);
    }
  };

  return (
    <section className="w-full py-5 md:py-10 border-b max-w-5xl mx-auto">
      <div className="container px-4 md:px-6">
        <h1 className="outline-offset-1 border-t-2 border-l-3 border-1 border-slate-200 shadow-sm p-2 font-bold font-serif text-xl">
          Recent Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {!loading && Array.isArray(blog)
            ? blog
                .slice((page - 1) * 6, page * 6)
                .map((item) => (
                  <ArticleCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    excerpt={item.excerpt}
                    category={item.category}
                    featuredImage={item.featuredImage}
                  />
                ))
            : Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="shadow-lg rounded-t-lg mt-10 animate-pulse w-full py-2">
                  <div className="h-32 bg-gray-300 rounded-t-lg" />
                  <div className="mt-2 px-2 space-y-2">
                    <div className="h-5 bg-gray-300 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-11/12" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-300 rounded w-1/2 mt-3" />
                  </div>
                  <div className="flex px-2 mt-4">
                    <div className="h-4 bg-gray-300 rounded w-1/3 ml-auto" />
                  </div>
                </div>
              ))}
        </div>
        <div className="mt-10 flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-1 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-lg font-bold">
            {page} / {Math.max(1, Math.ceil((blog?.length || 0) / 6))}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil((blog?.length || 0) / 6)}
            className="px-4 py-1 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default RecentBlog;
