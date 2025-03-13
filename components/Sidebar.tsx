'use client';
import { usePathname } from 'next/navigation';
import SidebarButton from './SidebarButton';
import Link from 'next/link';
interface NavItem {
    name: string;
    href: string;
    icon: string;
    children?: NavItem[];
}

const navigation: NavItem[] = [
    {
        name: 'ニュースフィード',
        href: '/',
        icon: '🏠',
    },
    {
        name: 'ライブラリー',
        href: '/library',
        icon: '📚',
    },
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

function NavItem({ item, level = 0 }: { item: NavItem; level?: number }) {
    const pathname = usePathname();

    return (
        <li>
            <div className="flex flex-col">
            <SidebarButton
                icon={item.icon}
                name={item.name}
                href={item.href}
            />
            </div>
        </li>
    );
}

export default function Sidebar() {
    return (
        <nav className="w-64 bg-gray-100 h-screen p-4">
            <Link href="/">
                <div className="flex pb-4 pl-2 pt-2">
                    <span className="text-2xl font-bold text-yellow-500">Pattto</span>
                </div>
            </Link>
            <ul className="space-y-2">
                {navigation.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </ul>
        </nav>
    );
} 