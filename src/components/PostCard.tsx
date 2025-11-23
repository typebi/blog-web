type Props = {
  title: string;
  summary: string;
  date: string;
};

export default function PostCard({ title, summary, date }: Props) {
  return (
    <article className="border rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2">{summary}</p>
    </article>
  );
}
