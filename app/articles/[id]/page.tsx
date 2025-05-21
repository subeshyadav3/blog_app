
'use client';

import { useEffect, useState } from "react";

type Article = {
  id: string;
  title: string;
  content: string;
  category: string;
  featuredImage: string;
};

function ArticleDetails({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;
    console.log(id);
  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/articles/${id}`);
        if (!res.ok) throw new Error('Failed to fetch article');
        const article = await res.json();
        setData(article);
        console.log(article);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, []);

  if (loading) return <div>Loading article...</div>;
  if (!data) return <div>Article not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={data.featuredImage} alt={data.title} className="w-full h-64 object-cover mb-6 rounded-lg" />
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">#{data.category}</p>
      <p className="text-lg text-gray-800 whitespace-pre-line">{data.content}</p>
    </div>
  );
}

export default ArticleDetails;
