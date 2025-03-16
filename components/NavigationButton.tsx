import Link from "next/link";

interface NavigationButtonProps {
    icon: string;
    name: string;
    href: string;
    variant: 'with-text' | 'without-text';
}

export default function NavigationButton(
    { icon, name, href, variant }: NavigationButtonProps) {
    if (variant === 'with-text') {
    return (
        <>
        <div className="flex flex-col">
            <Link href={href} className="flex items-center p-2 rounded-lg hover:bg-gray-100 border border-gray-200">
                <span className="inline-flex w-10 h-10 items-center justify-center bg-white rounded-lg">
                    <span className="text-2xl">
                    {icon}
                    </span>
                </span>
                <span className="text-lg pl-4">{name}</span>
            </Link>
        </div>  
        </>   
    )
    } else {
    return (
        <>
        <div className="flex flex-col">
            <Link href={href} className="flex flex-col items-center p-2 pb-1  rounded-lg hover:bg-gray-100 border border-gray-200">
                <span className="inline-flex w-10 h-10 items-center justify-center bg-white rounded-lg mb-1">
                    <span className="text-2xl">
                    {icon}
                    </span>
                </span>
                <span className="text-[10px]">{name}</span>
            </Link>
            
        </div>  
        </>   
    )
    }
    
}