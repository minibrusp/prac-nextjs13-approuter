import { Suspense } from 'react';
import NotesList from './NotesList';
import Loading from '../loading';
import styles from './notes.module.css';
import Link from 'next/link';

export default function NotesPage() {
  return (
    <main>
      <div className={styles.header}>
        <h1>Notes</h1>
        <Link href='/notes/create' className={styles.link}>
          Add Notes
        </Link>
      </div>

      <Suspense fallback={<Loading />}>
        <NotesList />
      </Suspense>
    </main>
  );
}
