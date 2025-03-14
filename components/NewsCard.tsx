import Image from 'next/image'
import Link from 'next/link'
import { ArticlePreview } from '@/types/articles'

export default function NewsCard({ id , imageUrl, title, description, author , createdAt}: ArticlePreview) {
    return (
        <Link 
            href={`/library/article/${id}`} 
            className="block overflow-hidden rounded-lg bg-white outline outline-1 outline-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-normal mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* ユーザーアイコンを表示する場合 */}
                        <div className="h-8 w-8 rounded-full bg-gray-200" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-gray-500">{author}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}