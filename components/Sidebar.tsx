'use client';
import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';
import ActionButton from './ActionButton';
import NavigationButton from './NavigationButton';

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

    return (
        <li>
            <NavigationButton
                icon={item.icon}
                name={item.name}
                href={item.href}
                variant={isOpen ? 'with-text' : 'without-text'}
            />
        </li>
    );
}

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <nav className={` flex flex-col bg-white h-screen p-2 border-r border-gray-200 transition-all duration-300 ${
            isOpen ? 'w-64' : 'w-22'
        }`}>
            <div className={`flex flex-row m-2 mb-4 ${isOpen ? 'justify-between' : 'justify-center'}`}>
                {isOpen && (
                <Link href="/">
                    <div className="flex">
                        
                        <span className={`text-3xl font-bold text-yellow-500`}>
                            Pattto
                        </span>
                    </div>
                </Link>
                )}
                <ActionButton 
                    icon={isOpen ? '⏮️' : '⏭️'} 
                    variant="normal" 
                    onClick={toggleSidebar}
                    className="h-10 w-10 p-0 flex items-center justify-center"
                />
            </div>
            <ul className="space-y-2">
                {navigation.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </ul>
        </nav>
    );
} 