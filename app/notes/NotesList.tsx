import Link from 'next/link';
import styles from './NotesList.module.css';
import ControlPanel from './ControlPanel';

async function getNotes() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
    {
      cache: 'no-store',
    }
  );

  const data = await response.json();
  return data?.items as any[];
}

export default async function NotesList() {
  const notes = await getNotes();

  return (
    <div className={styles.grid}>
      {notes?.map((note) => (
        <div key={note.id} className={styles.note}>
          <ControlPanel id={note.id} />
          <Link href={`/notes/${note.id}`}>
            <div>
              <h2 className={styles.title}>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
