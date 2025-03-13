import { notFound } from "next/navigation";

// 将来的にはAPI呼び出しに置き換える
async function getArticleData(id: string) {
  // テスト段階ではモックデータを返す
  // 実際のAPIでは、idを使って特定の記事を取得する
  return {
    id,
    imageUrl: "/images/image.png",
    title: `記事ID: ${id} - アンリアレイジの万華鏡のようなパリ・ファッションウィーク`,
    description: "ANREALAGEの2025-2026年秋冬コレクションは、「SCREEN」と題し、パリ・ファッションウィークでファッションとテクノロジーの革新的な融合を披露しました。衣服が光と色の動的なパターンで彩られ、まるで万華鏡のような視覚効果を生み出しています。このコレクションは、デジタル時代におけるファッションの新たな可能性を示唆しています。",
    author: "stephenhoban",
    date: "2024年3月12日"
  }
  
  // 将来的には以下のようになる
  // const res = await fetch(`your-api-endpoint/${id}`)
  // if (!res.ok) return null
  // return res.json()
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticleData(params.id);
  
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
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 mr-3" />
            <div>
              <p className="text-sm text-gray-700">{article.author}</p>
              <p className="text-xs text-gray-500">{article.date}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.description}
          </p>
        </div>
      </div>
    </div>
  );
} 