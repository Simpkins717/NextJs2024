import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as actions from '@/actions';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const firstSnippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!firstSnippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, firstSnippet.id);
  return (
    <div>
      <div className='flex m-4 justify-between items-center'>
        <h1 className='text-xl font-bold'>{firstSnippet.title}</h1>
        <div className='flex gap-4'>
          <Link
            href={`${props.params.id}/edit/`}
            className='p-2 border rounded'
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type='submit' className='p-2 border rounded'>
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{firstSnippet.code}</code>
      </pre>
    </div>
  );
}
