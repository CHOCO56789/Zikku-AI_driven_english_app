'use client';
import { useRouter } from 'next/navigation';

interface RoutingButtonProps {
  path: string;
  text: string;
}

export default function RoutingButton({ path, text }: RoutingButtonProps) {
  const router = useRouter();
  return (
    <button 
      onClick={() => router.push(path)}
      className="underline hover:text-blue-500"
    >
      {text}
    </button>
  );
} 