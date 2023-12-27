import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // make a server action
    'use server';

    //validate the inputs
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    //create new record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    //redirect user
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className='font-bold m-3'>Create A Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            className='border rounded p-2 w-full'
            id='title'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            className='border rounded p-2 w-full'
            id='code'
          />
        </div>
        <button type='submit' className='rounded p-2 bg-blue-200'>
          Submit
        </button>
      </div>
    </form>
  );
}
