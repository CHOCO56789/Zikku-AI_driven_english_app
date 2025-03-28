'use client';

import { useChat } from '@ai-sdk/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function LabPage() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get('prompt') || '';
  
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialInput: initialPrompt,
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && initialPrompt) {
      handleSubmit();
      isFirstRender.current = false;
    }
  }, [initialPrompt, handleSubmit]);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(message => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}