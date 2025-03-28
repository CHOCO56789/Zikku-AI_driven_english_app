import { redirect } from "next/navigation";

export default function Info() {
  return (
    <div className="
        max-w-3xl          // 最大幅を設定
        w-full             // 親要素いっぱいに広がる
        mx-auto            // 左右のマージンを自動で均等に
        px-2              // 小さい画面での余白
        sm:px-6           // 640px以上での余白
        lg:px-8           // 1024px以上での余白
        flex flex-col gap-4
        overflow-y-auto
    ">
      <div className="flex flex-col gap-4 py-4">
        <h1 className="text-4xl font-normal text-gray-700">設定</h1>
        <div className="border-t border-gray-200"></div>
      </div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="text-2xl font-bold text-gray-700">このアプリについて</h2>
        <div className="rounded-lg p-6 outline outline-gray-200">
            <img
                src="/icon/icon.svg"
                alt="Logo"
                width={110}
                height={32}
                className="text-yellow-500 mb-4"
            />
            <p className="text-gray-600">
            英語ニュースを英語で読みたいのに難しすぎて続かない。わからない単語をいちいち調べるのがめんどくさい。Zikkuはそんなあなたへ優しい文章でニュースを伝える学習アプリです。
            </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-700">ご意見・不具合の報告</h2>
        <div className="rounded-lg p-6 outline outline-gray-200">
            <p className="text-gray-600 mb-4">
            バージョン1.0.0
            </p>
            <p className="text-gray-600">
            ご意見や不具合の報告は<a href="mailto:info@zikku.com" className="text-blue-500">info@zikku.com</a>までお送りください。
            </p>
        </div>
        
        
      </div>
    </div>
  );
}