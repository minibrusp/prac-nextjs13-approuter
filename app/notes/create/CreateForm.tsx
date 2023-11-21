'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const note = {
      title,
      content,
    };

    const response = await fetch(
      'http://127.0.0.1:8090/api/collections/notes/records',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
      }
    );

    if (response.ok) {
      // router.refresh();
      router.push('/notes');
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            required
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Content:</span>
          <textarea
            required
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </label>
        <button disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Note</span>}
        </button>
      </form>
    </main>
  );
}
