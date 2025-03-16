// ActionButton
// .tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'normal' | 'colored' | 'disabled';
  icon?: React.ReactNode; // アイコンを表示するためのプロパティ
  href?: string;          // リンク先があれば指定
}

export default function ActionButton(
  { icon, 
    href, 
    variant = 'normal', 
    children, 
    disabled, 
    className = '',
     ...props }: ButtonProps) {
  const baseClasses = 'px-2 py-2 rounded-md focus:outline-none inline-flex items-center text-lg';

  // variant と disabled の状態に応じたスタイル
  const variantClasses = (() => {
    if (disabled) {
      return 'bg-gray-300 text-gray-600 cursor-not-allowed';
    }
    switch (variant) {
      case 'colored':
        return 'bg-yellow-500 text-white hover:bg-yellow-600';
      case 'normal':
      default:
        return 'bg-white text-black hover:bg-gray-100';
    }
  })();

  // 最終的な className を決定
  const finalClassName = `${baseClasses} ${variantClasses} ${className}`;

  // href が設定され、かつボタンが有効な場合はリンクとしてレンダリング
  if (href && !disabled) {
    return (
      <Link href={href} passHref>
        <a className={finalClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {icon && <span className="mr-1">{icon}</span>}
          {children}
        </a>
      </Link>
    );
  }

  // それ以外は通常の button としてレンダリング
  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </button>
  );
};

