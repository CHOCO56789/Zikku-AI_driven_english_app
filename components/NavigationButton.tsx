import Link from "next/link";

interface NavigationButtonProps {
    icon: string;
    name: string;
    href: string;
    variant: 'with-text' | 'without-text';
    isActive?: boolean;
}

export default function NavigationButton({ icon, name, href, variant, isActive }: NavigationButtonProps) {
    const baseClasses = 'flex items-center p-2 rounded-lg transition-colors duration-200 border-2';
    
    // アクティブ状態に応じてスタイルを変更
    const activeClasses = isActive 
        ? 'bg-yellow-100 text-yellow-600 border-yellow-300' 
        : 'hover:bg-gray-100 border-transparent';
    
    const variantClasses = variant === 'with-text' 
        ? 'w-full gap-3'
        : 'w-12 h-12';

    return (
        <Link href={href}>
            <div className={`${baseClasses} ${activeClasses} ${variantClasses}`}>
                <span className="text-2xl inline-flex w-10 h-10 items-center justify-center">{icon}</span>
                {variant === 'with-text' && (
                    <span className="text-0.5xl font-medium">{name}</span>
                )}
            </div>
        </Link>
    );
}