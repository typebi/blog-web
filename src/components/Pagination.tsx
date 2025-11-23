type Props = {
  current: number;
  total: number;
};

export default function Pagination({ current, total }: Props) {
  return (
    <div className="flex gap-2 mt-4">
      <button disabled={current === 1}>Prev</button>
      <span>
        {current} / {total}
      </span>
      <button disabled={current === total}>Next</button>
    </div>
  );
}
