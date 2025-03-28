'use client';
import { useRef, useEffect ,useState} from 'react';
import Link from 'next/link';
import ActionButton from './ActionButton';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PromptInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [inputText, setInputText] = useState('');

    // テキストエリアの高さを自動調整する関数
    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 300)}px`;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
        adjustHeight();
    };

    return (
        <div className="
            flex flex-col gap-2 rounded-md 
            border border-gray-300 p-2
            w-full max-w-[600px]
            mx-auto
        ">
            <textarea 
                ref={textareaRef}
                value={inputText}
                placeholder="記事の内容を入力してください" 
                onChange={handleInputChange}
                className="
                    w-full 
                    min-h-[70px]
                    max-h-[500px]
                    resize-none
                    overflow-y-auto
                    p-2
                    rounded-md
                    border-gray-200
                    focus:outline-none
                "
            
            />
            <div className="flex justify-end">
                <Link
                    href={{
                        pathname: '/lab',
                        query: { prompt: inputText }
                    }}
                >
                    <ActionButton 
                        variant="normal-rounded" 
                        disabled={!inputText.trim()}
                    >
                        <ArrowRightIcon className="size-5" />
                    </ActionButton>
                </Link>
            </div>
        </div>
    )
}
