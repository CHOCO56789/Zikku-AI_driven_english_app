import Image from 'next/image'
import Link from 'next/link'
import { ArticlePreview } from '@/types/articles'

export default function NewsCard({ id , imageUrl, title, description, author , tags , createdAt}: ArticlePreview) {
    const formattedDate = new Date(createdAt).toLocaleDateString('ja-JP', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
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
                <div className="flex flex-row justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="/images/authorIcon32*32.jpg" alt="Author Icon" width={32} height={32} className="h-8 w-8 rounded-full bg-gray-200"/>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-gray-500">{author}</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-row overflow-x-auto">
                        {tags.map((tag) => (
                            <div className="ml-3 bg-gray-100 rounded-full px-2 py-1 whitespace-nowrap justify-center">
                                <p className="text-sm text-gray-500">{tag}</p>
                            </div>
                        ))}
                    </div> */}
                    <div className="flex items-center">
                        {formattedDate}
                    </div>
                </div>
            </div>
        </Link>
    )
}