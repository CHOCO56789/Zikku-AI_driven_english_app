import { redirect } from "next/navigation";
import NewsCard  from "@/components/NewsCard";

// 将来的にはAPI呼び出しに置き換える
async function getNewsData() {
  // テスト段階ではモックデータの配列を返す
  return [
    {
      id: "1",
      imageUrl: "/images/image.png",
      title: "アンリアレイジの万華鏡のようなパリ・ファッションウィーク",
      description: "ANREALAGEの2025-2026年秋冬コレクションは...",
      author: "stephenhoban"
    },
    {
      id: "2",
      imageUrl: "/images/image.png",
      title: "次世代デザイナーが語る、サステナブルファッションの未来",
      description: "環境に配慮した素材と製造プロセスを採用する...",
      author: "fashionreporter"
    },
    {
      id: "3",
      imageUrl: "/images/image.png",
      title: "ストリートスタイルから学ぶ、2025年春のトレンド",
      description: "世界各地のファッションウィークで見られた...",
      author: "trendwatcher"
    },
    {
      id: "4",
      imageUrl: "/images/image.png",
      title: "伝統工芸とテクノロジーの融合：日本の新しいファッション",
      description: "伝統的な染色技術とAIを組み合わせた...",
      author: "japanfashion"
    }
  ]
  
  // 将来的には以下のようになる
  // const res = await fetch('your-api-endpoint')
  // return res.json()
}

export default async function Library() {
  const newsDataList = await getNewsData()

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
        {newsDataList.map((newsData) => (
          <NewsCard key={newsData.id} {...newsData} />
        ))}
    </div>
  );
}