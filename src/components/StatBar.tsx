const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

const MAX_STAT = 150;

interface Props {
  name: string;
  value: number;
}

export function StatBar({ name, value }: Props) {
  const percent = Math.min(100, Math.round((value / MAX_STAT) * 100));

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-24 shrink-0 text-slate-500">
        {STAT_LABELS[name] ?? name}
      </span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-slate-800"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-medium text-slate-700">
        {value}
      </span>
    </div>
  );
}
