import { SubmitButton } from '@/app/components/SubmitButton';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function EditForm({ note }: { note: any }) {
  const editForm = async (formData: FormData) => {
    'use server';

    const data: { [index: string]: any } = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    const response = await fetch(
      'http://127.0.0.1:8090/api/collections/notes/records/' + note.id,
      {
        method: 'PATCH',
        body: formData,
      }
    );

    if (response.ok) {
      revalidatePath('/notes');
      revalidatePath(`/notes/${note.id}`);
      redirect(`/notes/${note.id}`);
    }
  };

  return (
    <form action={editForm}>
      <label>
        <span>Title:</span>
        <input required type='text' name='title' defaultValue={note.title} />
      </label>
      <label>
        <span>Content:</span>
        <textarea required name='content' defaultValue={note.content} />
      </label>
      <SubmitButton />
    </form>
  );
}
