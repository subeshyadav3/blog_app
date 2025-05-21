import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ArticleCardProps = {
  id: string;
  title: string;
  content: string;
  category: string;
  featuredImage: string;

};

export default function ArticleCard({
  id,
  title,
  content,
  category,
  featuredImage,

}: ArticleCardProps) {
  return (
    <Link href={`/articles/${id}`} className="block">
      <div className="rounded-2xl shadow-md overflow-hidden transition hover:scale-105 max-w-sm bg-white cursor-pointer">
        <div className="h-40 w-full relative">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
          <p className="text-sm text-gray-600 line-clamp-4 mb-2">{content}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-primary font-medium">#{category}</span>
            <Button variant="link" size="sm" className="text-sm p-0 h-auto">
              Read more →
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
