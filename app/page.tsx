import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PromptInput from '@/components/PromptInput'
import TestComponent from '@/components/TestComponent'
import './globals.css';

export const metadata: Metadata = {
  title: "Pattto",
  description: "Pattto",
}

export default async function Page() {
  return (
    <div className="
        items-center justify-center h-screen
        max-w-3xl          // 最大幅を設定
        w-full             // 親要素いっぱいに広がる
        mx-auto            // 左右のマージンを自動で均等に
        px-2              // 小さい画面での余白
        sm:px-6           // 640px以上での余白
        lg:px-12           // 1024px以上での余白
        flex flex-col gap-4">
      <h1 className="text-3xl pb-8">どんな記事を作成しますか？</h1>
      <PromptInput />
      
      {/* <TestComponent /> */}
    </div>
  );
} 

