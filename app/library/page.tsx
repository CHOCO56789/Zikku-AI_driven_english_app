import { redirect } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import { ArticlePreview } from "@/types/articles";
import { Suspense } from "react";

async function getArticles(): Promise<ArticlePreview[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/articles`);
    const data = await response.json();
    console.log('##data / library:', data);
    return data.data;

  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function Library() {
  const articleList: ArticlePreview[] = await getArticles()

  return (
    <div className="
        max-w-3xl          // 最大幅を設定
        w-full             // 親要素いっぱいに広がる
        mx-auto            // 左右のマージンを自動で均等に
        px-2              // 小さい画面での余白
        sm:px-6           // 640px以上での余白
        lg:px-12           // 1024px以上での余白
        flex flex-col gap-4
    ">
      <Suspense fallback={<div>Loading...</div>}>
        {articleList.map((article: ArticlePreview) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </Suspense>
    </div>
  );
}