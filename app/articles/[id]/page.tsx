import { use } from "react";
import Summarizer from "@/app/components/summarizerAI/summarizer";


interface Params {
  params: Promise<{ id: string }>;
}

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  featuredImage: string;
}

async function fetchArticle(id: string): Promise<Article> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Article not found");
  return res.json();
}

export default function ArticlePage({ params }: Params) {
  const { id } = use(params);
  const article = use(fetchArticle(id));

  return (
    <div className="p-6 max-w-3xl mx-auto relative ">
      <img
        src={article.featuredImage}
        alt={article.title}
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <Summarizer content={article.title}/>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">#{article.category}</p>
      <div
        className="prose max-w-full text-gray-800"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
