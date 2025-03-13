import Link from "next/link";

export default function SidebarButton(
    { icon, name, href }: 
    { icon: string, name: string, href: string }) {
    return (
        <>
            <Link href={href} className="flex items-center p-2 rounded-lg hover:bg-gray-200 border border-gray-200">
                <span className="inline-flex w-10 h-10 items-center justify-center bg-gray-100 rounded-lg">
                    <span className="text-2xl">
                        {icon}
                    </span>
                </span>
                <span className="text-lg pl-4">{name}</span>
            </Link>
        </>
        
    )
}