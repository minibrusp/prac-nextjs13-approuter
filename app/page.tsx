import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Notes App</h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium
        id recusandae exercitationem ad quis deleniti asperiores optio
        provident, maxime, blanditiis reiciendis eaque accusamus quasi vel animi
        vitae consequatur nostrum similique ipsa sed dolore. Amet consequuntur
        quisquam voluptatibus quibusdam facilis ut odio eligendi! Blanditiis
        molestiae aliquid dicta consequuntur dolore quam minus sed dignissimos
        quos, vel sapiente facilis culpa. Laudantium facilis doloribus voluptas?
        Impedit necessitatibus maiores mollitia voluptatum tenetur quidem, saepe
        cum alias fugiat sint, repellat nulla debitis, repellendus dolore soluta
        dolorem explicabo velit consectetur! Facilis quae necessitatibus quam
        asperiores tempore, odit deleniti eius molestiae similique impedit at
        eaque earum consequatur ut. Cum consequatur ab velit a saepe dicta
        reprehenderit dolorum ipsa amet sequi suscipit fugit, inventore
        accusantium sint et praesentium eos molestiae quod excepturi quas nam.
        Nemo officia ipsam in, dolores optio a, labore excepturi expedita
        doloremque, adipisci est ipsum laudantium quod perspiciatis perferendis
        id necessitatibus architecto accusamus veniam repellendus.
      </p>
      <Link href='/notes' className={styles.button}>
        Open Notes
      </Link>
    </main>
  );
}
