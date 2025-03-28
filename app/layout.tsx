import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { SidebarProvider } from '@/providers/SidebarContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pattto-study-english",
  description: "Pattto-study-english",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <div className="sticky top-0 h-screen">
              <Sidebar />
            </div>
            <main className="flex-1 p-4 transition-all duration-300 overflow-y-auto">
              {children}
            </main>
          </div> 
        </SidebarProvider>
      </body>
    </html>
  );
}
