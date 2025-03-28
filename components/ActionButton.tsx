// ActionButton
// .tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'normal' | 'normal-rounded' | 'colored' | 'disabled';
  icon?: React.ReactNode; // アイコンを表示するためのプロパティ
}

export default function ActionButton(
  { icon, 
    variant,
    children, 
    disabled, 
    className = '',
     ...props }: ButtonProps) {
  const baseClasses = 'px-2 py-2 focus:outline-none inline-flex items-center justify-center text-lg';

  // variant と disabled の状態に応じたスタイル
  const variantClasses = (() => {
    if (disabled) {
      return variant.includes('rounded') 
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed rounded-full w-10 h-10'
        : 'bg-gray-200 text-gray-400 cursor-not-allowed rounded-md';
    }

    switch (variant) {
      case 'normal-rounded':
        return 'bg-white text-black hover:bg-gray-100 rounded-full w-10 h-10';
      case 'colored':
        return 'bg-yellow-500 text-white hover:bg-yellow-600 rounded-md';
      case 'normal':
      default:
        return 'bg-white text-black hover:bg-gray-100 rounded-md';
    }
  })();

  // 最終的な className を決定
  const finalClassName = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button 
      className={finalClassName} 
      disabled={disabled} 
      {...props}
    >
      {icon && (
        <span className={`flex items-center justify-center ${disabled ? 'opacity-50' : ''}`}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};

