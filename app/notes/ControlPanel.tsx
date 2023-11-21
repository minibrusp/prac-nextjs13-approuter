'use client';

import { useRouter } from 'next/navigation';
import styles from './NotesList.module.css';

export default function ControlPanel({ id }: { id: string }) {
  const router = useRouter();

  const editClickHandler = () => {
    // href={`/notes/${note.id}/edit`}
    console.log('hello');
    router.push(`/notes/${id}/edit`);
  };
  return (
    <div className={styles.controls}>
      <button onClick={editClickHandler}>edit</button>
      <span>delete</span>
    </div>
  );
}
