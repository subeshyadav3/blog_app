import { notFound } from "next/navigation";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  featuredImage: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ArticleDetails({ params }: PageProps) {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${id}`)


  if (!res.ok) return notFound();

  const data: Article = await res.json();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={data.featuredImage}
        alt={data.title}
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">#{data.category}</p>
      <p className="text-lg text-gray-800 whitespace-pre-line">{data.content}</p>
    </div>
  );
}
