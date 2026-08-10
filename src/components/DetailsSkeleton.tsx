export function DetailsSkeleton() {
  return (
    <div
      className="w-full animate-pulse overflow-hidden rounded-2xl bg-white shadow-xl"
      role="status"
      aria-label="Loading Pokémon details"
    >
      <div className="h-24 bg-slate-200" />
      <div className="flex flex-col gap-6 p-6 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:w-48 sm:shrink-0">
          <div className="h-44 w-44 rounded-full bg-slate-200" />
          <div className="h-6 w-16 rounded-full bg-slate-200" />
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="h-14 rounded-xl bg-slate-100" />
            <div className="h-14 rounded-xl bg-slate-100" />
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 w-full rounded bg-slate-200" />
          ))}
        </div>
      </div>
    </div>
  );
}
