type Props = { label: string };

export default function Tag({ label }: Props) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700">
      {label}
    </span>
  );
}
