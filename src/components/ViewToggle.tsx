export type ListViewMode = "pagination" | "load-more";

interface Props {
  mode: ListViewMode;
  onChange: (mode: ListViewMode) => void;
}

export function ViewToggle({ mode, onChange }: Props) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("pagination")}
        aria-pressed={mode === "pagination"}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          mode === "pagination"
            ? "bg-slate-900 text-white"
            : "text-slate-500 hover:text-slate-800"
        }`}
      >
        Page Controls
      </button>
      <button
        type="button"
        onClick={() => onChange("load-more")}
        aria-pressed={mode === "load-more"}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          mode === "load-more"
            ? "bg-slate-900 text-white"
            : "text-slate-500 hover:text-slate-800"
        }`}
      >
        Load More
      </button>
    </div>
  );
}
