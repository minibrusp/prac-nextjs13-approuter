import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/notes'>Notes</Link>
    </nav>
  );
}
