"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  featuredImage: string;
}

export default function ArticleClient() {
  const pathname = usePathname();
  const id = pathname?.split("/").pop(); 

  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: Article) => setArticle(data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return notFound();

  if (!article) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={article.featuredImage}
        alt={article.title}
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">#{article.category}</p>
      <p className="text-lg text-gray-800 whitespace-pre-line">{article.content}</p>
    </div>
  );
}
