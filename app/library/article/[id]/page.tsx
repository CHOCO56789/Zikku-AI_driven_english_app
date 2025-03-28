import { notFound } from "next/navigation";
import { Article } from "@/types/articles";
import { getArticle } from "@/features/articles/getArticle";
import LessonCard from "@/components/LessonCard";
import { Suspense } from "react";
import Image from "next/image";
// Client Componentを分離
const LessonCardWrapper = ({ articleId }: { articleId: string }) => {
    return (
        <Suspense fallback={<div>読み込み中...</div>}>
            <LessonCard articleId={articleId} />
        </Suspense>
    );
};

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const article: Article | null = await getArticle(resolvedParams.id);
  
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
            <Image src="/images/authorIcon32*32.jpg" alt="Author Icon" width={32} height={32} className="h-8 w-8 rounded-full bg-gray-200 mr-3" />
            <div>
              <p className="text-sm text-gray-700">{article.author}</p>
              <p className="text-xs text-gray-500">{article.createdAt}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line w-2/3">
              {article.content}
            </p>
            <div className="w-1/3">
              <LessonCardWrapper articleId={article.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 