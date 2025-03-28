'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/providers/SidebarContext';
import ActionButton from './ActionButton';
import NavigationButton from './NavigationButton';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';


interface NavItem {
    name: string;
    href: string;
    icon: string;
    children?: NavItem[];
}

const navigation: NavItem[] = [
    {name: 'ホーム', href: '/', icon: '🏠'},
    {name: 'ライブラリ', href: '/library', icon: '📚'},
    {
        name: '設定',
        href: '/info',
        icon: 'ℹ️',
        children: [
            { name: 'About', href: '/info/about', icon: '👥' },
            { name: 'Contact', href: '/info/contact', icon: '📧' },
        ],
    },
];

function NavItem({ item }: { item: NavItem }) {
    const { isOpen } = useSidebar();
    const pathname = usePathname();
    
    //TODO: このプログラムの理解
    const isActive = pathname === item.href || 
                    pathname.startsWith(item.href + '/') ||
                    (item.children?.some(child => 
                        pathname === child.href || 
                        pathname.startsWith(child.href + '/')
                    ));

    return (
        <li>
            <NavigationButton
                icon={item.icon}
                name={item.name}
                href={item.href}
                variant={isOpen ? 'with-text' : 'without-text'}
                isActive={isActive}
            />
        </li>
    );
}

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar();
    
    return (
        <nav className={` flex flex-col bg-white h-screen p-4 border-r border-gray-200 transition-all duration-300 ${
            isOpen ? 'w-64' : 'w-22  items-center'
        }`}>
            <div className={`flex flex-row items-center m-2 ${isOpen ? 'justify-between' : 'justify-center'}`}>
                {isOpen && (
                <Link href="/">
                    <div className="flex items-center">
                        <img
                            src="/icon/icon.svg"
                            alt="Logo"
                            width={110}
                            height={32}
                            className="text-yellow-500"
                        />
                    </div>
                </Link>
                )}
                <ActionButton 
                    icon={isOpen ? <ChevronLeftIcon className="size-5" /> : <ChevronRightIcon className="size-5" />} 
                    variant="normal-rounded" 
                    onClick={toggleSidebar}
                />
            </div>
            <ul className="space-y-2 my-4">
                {navigation.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </ul>
        </nav>
    );
} 