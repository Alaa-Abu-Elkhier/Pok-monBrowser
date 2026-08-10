interface Props {
  count?: number;
}

export function GridSkeleton({ count = 20 }: Props) {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      role="status"
      aria-label="Loading Pokémon"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
        >
          <div className="h-24 w-24 animate-pulse rounded-xl bg-slate-200 sm:h-28 sm:w-28" />
          <div className="mt-3 h-3 w-16 animate-pulse rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
}
