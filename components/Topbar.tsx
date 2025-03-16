export default function Topbar() {
    return (
        <div className="
            bg-gray-500
            flex flex-row
            w-full
            mx-auto            // 左右のマージンを自動で均等に
            px-2              // 小さい画面での余白
            sm:px-6           // 640px以上での余白
            lg:px-12           // 1024px以上での余白
            gap-4
            h-16">
            <p>設定</p>
            <p>ログアウト</p>
            <p>設定</p>
            <p>ログアウト</p>
        </div>
    )

}