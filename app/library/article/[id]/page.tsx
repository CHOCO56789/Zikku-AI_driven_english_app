import { notFound } from "next/navigation";
import { Article } from "@/types/articles";
import { getArticle } from "@/features/articles/getArticle";

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.id);
  
  // 記事が見つからない場合は404ページを表示
  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div>
        <div className="relative h-64 w-full rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={"article image"}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 mr-3" />
            <div>
              <p className="text-sm text-gray-700">{article.author}</p>
              <p className="text-xs text-gray-500">{article.createdAt}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </p>
        </div>
      </div>
    </div>
  );
} 