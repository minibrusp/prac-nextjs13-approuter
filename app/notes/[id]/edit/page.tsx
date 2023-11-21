import { notFound } from 'next/navigation';
import EditForm from './EditForm';

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

export default async function EditNote({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  console.log(note);

  return (
    <main>
      <h2>Edit Note - {note.id}</h2>
      <EditForm note={note} />
    </main>
  );
}
