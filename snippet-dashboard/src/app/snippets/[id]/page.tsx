import { db } from '@/db';
import { notFound } from 'next/navigation';

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
  console.log(firstSnippet);
  return <div>Show a snippet,{firstSnippet?.code}</div>;
}
