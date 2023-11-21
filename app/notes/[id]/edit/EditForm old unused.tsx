// 'use client';

// import { useRouter } from 'next/navigation';
// import { FormEvent, useState } from 'react';

// export default function EditForm({ note }: { note: any }) {
//   const router = useRouter();

//   const [title, setTitle] = useState(note.title);
//   const [content, setContent] = useState(note.content);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const newNote = {
//       title,
//       content,
//     };

//     console.log(newNote);

//     const response = await fetch(
//       'http://127.0.0.1:8090/api/collections/notes/records/' + note.id,
//       {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newNote),
//       }
//     );

//     if (response.ok) {
//       // router.refresh();
//       router.push(`/notes/${note.id}`);
//     }
//   };

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Title:</span>
//           <input
//             required
//             type='text'
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//         </label>
//         <label>
//           <span>Content:</span>
//           <textarea
//             required
//             onChange={(e) => setContent(e.target.value)}
//             value={content}
//           />
//         </label>
//         <button disabled={isLoading}>
//           {isLoading && <span>Editting...</span>}
//           {!isLoading && <span>Edit Note</span>}
//         </button>
//       </form>
//     </main>
//   );
// }
