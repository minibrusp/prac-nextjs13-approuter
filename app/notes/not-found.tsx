import Link from 'next/link';
import styles from './notes.module.css';

export default function NotFound() {
  return (
    <main>
      <h2>We Hit a Brick Wall.</h2>
      <p>We could not find the note you were looking for.</p>
      <p>
        Go back to all{' '}
        <Link href='/notes' className={styles.link}>
          notes
        </Link>
        .
      </p>
    </main>
  );
}
