interface SnipperShowEditPageProps {
  params: {
    id: string;
  };
}

export default function SnipperShowEditPage(props: SnipperShowEditPageProps) {
  const id = parseInt(props.params.id);
  return <div>Editing snippet with id,{id}</div>;
}
