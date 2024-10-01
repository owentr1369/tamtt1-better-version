import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
  const snippet = await db.snippet.findUnique({
    where: {
      id: Number(props.params.id),
    },
  });
  if (!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
};

export default SnippetShowPage;
