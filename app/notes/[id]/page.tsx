import { notFound } from 'next/navigation';
import styles from './note.module.css';

export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records'
  );

  const notes = await response.json();

  return notes.items.map((note: { id: string }) => ({
    id: note.id,
  }));
}

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);
  return (
    <div>
      <h1 className={styles.heading}>notes/{note.id}</h1>
      <div className={''}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
