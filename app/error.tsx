'use client';

import { useRouter } from "next/navigation";

export default function Error({error}:{error:Error}) {
    const router = useRouter();
    const handleBackToHome = () => router.push('/');
    return (
        <div>
            <h1>エラーが発生しました</h1>
            <p>{error.message}</p>
            <button onClick={handleBackToHome}>ホームに戻る</button>
        </div>
    )
}